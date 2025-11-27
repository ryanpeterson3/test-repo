import { apiUrl } from "./apiUrl";

const returnPopupContent = (arr) => {
    if (arr.length > 0) {
        if (arr[0]?.hasOwnProperty('micro_popup')) {
            if (arr[0].micro_popup?.data?.id) {
              return {
                id: arr[0].micro_popup?.data?.id ? arr[0].micro_popup.data.id : null,
                collection: 'micro-popups',
                url: `${apiUrl}/micro-popups/${arr[0].micro_popup.data.id}?populate[0]=property.address.city`
              }
            } else {
              return null;
            }
            
          } else {
            return null;
          }
    } else {
        return null;
    }
}

export default returnPopupContent;