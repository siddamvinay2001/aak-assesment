export default function Alert({
  isSuccess,
  message,
  handleAlert,
}: {
  isSuccess: boolean;
  message: string;
  handleAlert: () => void;
}) {
  const textAlertStyle = isSuccess ? "text-green-400" : "text-red-400";

  return (
    <div className="fixed bg-white top-4 p-4 rounded-md w-3/5 shadow-lg">
      <div className="flex justify-between flex-nowrap items-center">
        <p className={`${textAlertStyle} text-sm`}>{message}</p>
        <button
          className={`${textAlertStyle} bg-slate-200 rounded shadow-sm p-1 hover:shadow-lg`}
          onClick={handleAlert}
        >
          {isSuccess ? "login" : "X"}
        </button>
      </div>
    </div>
  );
}
