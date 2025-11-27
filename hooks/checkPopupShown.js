'use client'
  
export default function checkPopupShown() {
    const popupShown = JSON.parse(sessionStorage.getItem('popupShown'));

    if (!popupShown) {
        sessionStorage.setItem('popupShown', true)
    }
    
    return popupShown;
}