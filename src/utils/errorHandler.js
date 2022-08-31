import toast from "react-hot-toast";

export const handleError = (error) => {
  const message = errorResponseHandler(error);
  toast.error(message);
};

const errorResponseHandler = (error) => {
  if (error.response) {
    const { message, data } = error.response;
    if (data) {
      const validationErrors = Object.values(data).join(" ");
      return `${message}: ${validationErrors}`;
    }
    return message;
  }
  return error.message;
};
