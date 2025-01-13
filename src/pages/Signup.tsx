export default function Signup() {
  const handleFormSubmit: () => void = () => {
    console.log("Form is submitted");
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-7">
        <form onSubmit={handleFormSubmit}>
          <div className="">Heading and side heading</div>
          <div className="">Firstname</div>
          <div>LastName</div>
          <div>Username</div>
          <div>Country</div>
          <div>Email</div>
          <div>PAssword</div>
          <div> Confirm Password</div>
          <div>Agree</div>
          <div>Button</div>
        </form>
      </div>
    </div>
  );
}
