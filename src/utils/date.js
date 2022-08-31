import { format } from "date-fns";

export const formatDate = (dateString) => {
  return format(new Date(dateString), "do MMMM, yyyy");
};
