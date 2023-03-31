import { useMutation } from "react-query";
import { QueryService } from "lib/QueryService";
import API_ENDPOINTS from "constants/endpoints";

const propertiesQueryServices = new QueryService(API_ENDPOINTS.SEND_MESSAGE);

const useSendContactMessage = (onSuccessHandler, onErrorHandler) => {
  return useMutation(
    ({ data }) => propertiesQueryServices.post(data), {
      onSuccess: () => onSuccessHandler(),
      onError: (data) => onErrorHandler(data)
    }
  );
};

export default useSendContactMessage;