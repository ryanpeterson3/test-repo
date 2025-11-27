import HubspotForm from 'react-hubspot-form';
import ContactUnsubscribe from './v2/Contact/ContactUnsubscribe.component';

const PropertyForm = ({ setFormSubmitted, formId, portalId, onSubmit, hiddenFieldValues }) => {
    const assignHiddenFieldValues = () => {
        if (hiddenFieldValues) {
            const unitIdInput = document.querySelector('input[name="unit_number"]');

            if (unitIdInput && hiddenFieldValues.unitId) {
                unitIdInput.value = hiddenFieldValues.unitId;    
            }
        }
    }

    return (
        <>
            <HubspotForm
                portalId={portalId}
                formId={formId}
                onSubmit={onSubmit ? () => onSubmit() : null}
                onReady={() => assignHiddenFieldValues()}
                onFormSubmitted={() => setFormSubmitted()}
                loading={<div>Loading...</div>}
            />
            
            <ContactUnsubscribe />
        </>
    )
}

export default PropertyForm;
