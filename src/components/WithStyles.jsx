const WithStyles = ({ description, headline, image }) => {
    return (
      <div style={{ textAlign: "center", padding: "10px" }}>
        <img
          src={image}
          alt={headline}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <h3>{headline}</h3>
        <p>{description}</p>
      </div>
    );
  };

export default WithStyles