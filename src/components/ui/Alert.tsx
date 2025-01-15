export default function Alert({ isSuccess, message, handleAlert }) {
  const textAlertStyle = isSuccess ? "text-green-400" : "text-red-400";

  return (
    <div className="fixed bg-white top-4 p-4 rounded-md w-3/5 shadow-lg">
      <div className="flex justify-between items-center">
        <p className={textAlertStyle}>{message}</p>
        <button className={textAlertStyle} onClick={handleAlert}>
          {isSuccess ? "login" : "X"}
        </button>
      </div>
    </div>
  );
}
