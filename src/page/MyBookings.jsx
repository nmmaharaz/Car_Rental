import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdOutlineDateRange } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { Button, Card, Modal } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAxiosSecure from "../hook/UseAxios";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading]= useState(true)
  const axiosSecure = useAxiosSecure();
  const [updateDate, setUpdateDate] = useState(null);
  const [bookMark, setBookMark] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(updateDate?.start_date);
  const [endDate, setEndDate] = useState(updateDate?.end_date);
  console.log("This update date", value);
  useEffect(() => {
    bookMarkData();
  }, [user?.email]);
  const bookMarkData = async () => {
    const { data } = await axiosSecure.get(`/bookmark/${user?.email}`);
    setLoading(false)
    setBookMark(data);
  };
 

  const handleDateUpdate = async (e) => {
    e.preventDefault();
    const start_date = format(value, "dd/MM/yyyy HH:mm");
    const end_date = format(endDate, "dd/MM/yyyy HH:mm");

    try {
      await axiosSecure.patch(`/bookmark/${updateDate._id}`, {
        end_date,
        start_date,
      });
      bookMarkData();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate =async(id, prevStatus, status) =>{
    if (prevStatus === status || prevStatus === 'Canceled')
      return console.log('Not Allowed')

    try {
      const { data } = await axiosSecure.patch(
        `/bookmarkstatusupdate/${id}`,
        {booking_status: status }
      )
      bookMarkData()
      toast.success(`Status changed to ${status}`)
    } catch (err) {
        console.log(err)
    }
  }

  const handleStatusChange = async (id, prevStatus, status) => {
    toast(t => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
          Are you sure you want to cancel this booking?
          </p>
        </div>
        <div className='gap-2 flex'>
          <button
            className='bg-red-400 text-white px-3 py-1 rounded-md'
            onClick={() => {
              toast.dismiss(t.id)
              handleUpdate(id, prevStatus, status)
            }}
          >
            Yes
          </button>
          <button
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),{
      position: "top-center",
      width: "400px",
      height: 'auto'
   })
  }
  
  if(loading)return <Loader></Loader>

  return (
    <div className="my-12">
      <Card className="overflow-x-auto w-10/12 mx-auto border border-solid border-blue-300">
        <table className="table">
          <Modal
            show={openModal}
            size="xl"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <p className="text-3xl font-bold mb-7">Modify Date</p>
                <DatePicker
                  selected={value}
                  onChange={(date) => setValue(date)}
                  placeholderText="select start date"
                  dateFormat="dd/MM/yyyy HH:MM"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="select end date"
                  dateFormat="dd/MM/yyyy HH:MM"
                />
                <div className="flex mt-8 justify-center gap-4">
                  <Button color="failure" onClick={handleDateUpdate}>
                    Confirm
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <thead>
            <tr className="text-white font-bold text-[16px] bg-[#4472c4]">
              <th>Car Image</th>
              <th>Car Model</th>
              <th className="text-center">Booking Date</th>
              <th className="text-center">Daily Rental Price</th>
              <th className="text-center">Booking Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookMark?.map((bookMark, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-[#ffffff] hover:bg-pink-50"
                    : "bg-[#ddebf7] hover:bg-purple-100"
                }`}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14">
                        <img
                          src={bookMark.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold text-[16px]">{bookMark.car_model}</p>
                </td>
                <td className="text-center">
                  <div className="flex flex-col gap-y-2">
                    <p>{bookMark.start_date}</p>
                    <p>{bookMark.end_date}</p>
                  </div>
                </td>
                <td className="text-center">${bookMark.rental_price}</td>
                <td className={`text-center ${
              bookMark.booking_status === 'Confirmed' && 'text-green-500'
            } ${
              bookMark.booking_status === 'Canceled' && 'text-red-500'
            }`} >{bookMark?.booking_status}</td>
                <td className="">
                  <div className="flex items-center justify-center gap-5">
                    <Button
                      onClick={() => {
                        setOpenModal(true), setUpdateDate(bookMark);
                      }}
                      outline
                      gradientDuoTone="purpleToPink"
                      size="sm"
                    >
                      <p className="flex items-center">
                        <MdOutlineDateRange className="text-[16px] mr-2" />
                        Modify Date
                      </p>
                    </Button>

                   <button disabled={bookMark.booking_status == 'Canceled'} className="disabled:cursor-not-allowed" onClick={() => handleStatusChange(bookMark._id, bookMark.booking_status, "Canceled")} >
                   <GiCancel
                      className="text-2xl text-red-500"
                    />
                   </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyBookings;
