import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdOutlineDateRange } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { Button, Card, Modal } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAxiosSecure from "../hook/UseAxios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [updateDate, setUpdateDate] = useState(null)
  const [bookMark, setBookMark] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(updateDate);
  console.log("This update date",value)
  useEffect(() => {
    bookMarkData();
  }, [user?.email]);
  const bookMarkData = async () => {
    const { data } = await axiosSecure.get(
      `/bookmark/${user?.email}`
    );
    setBookMark(data);
  };
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/bookmark/${id}`);
      bookMarkData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateUpdate = async (e)=>{
      e.preventDefault()
      const formatDate = format(value, 'dd-MM-yyyy HH:mm')

      console.log("data paychi", formatDate)
      try {
       await axiosSecure.patch(
          `/bookmark/${updateDate._id}`,
          {date:formatDate}
        );
        bookMarkData();
        setOpenModal(false)
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>
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
                    placeholderText="Click to select a date"
                    dateFormat="dd/MM/yyyy HH:MM"
                  />
                   <div className="flex mt-8 justify-center gap-4">
              <Button
                color="failure"
                onClick={handleDateUpdate}
              >
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
                <td className="text-center">{bookMark.date}</td>
                <td className="text-center">${bookMark.rental_price}</td>
                <td className="text-center">{bookMark.booking_status}</td>
                <td className="">
                  <div className="flex items-center justify-center gap-5">
                   
                    <Button onClick={() => {setOpenModal(true), setUpdateDate(bookMark)}} outline gradientDuoTone="purpleToPink" size="sm">
                      <p className="flex items-center">
                        <MdOutlineDateRange className="text-[16px] mr-2" />
                        Modify Date
                      </p>
                    </Button>
                 
                    <GiCancel
                      onClick={() => handleDelete(bookMark._id)}
                      className="cursor-pointer text-2xl text-red-500"
                    />
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
