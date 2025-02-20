import { Dropdown } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const WhatsappButton = () => {
  const location = useLocation();


  const whatsappNumbers = {
    "/360carwash": "+573205072692",
    "/360otra": "+573305072693",
    "/360otra2": "+573405072694"
  };

  const currentNumber = whatsappNumbers[location.pathname];

  return (
    <>
      {currentNumber ? (
        <a 
          href={`https://wa.me/${currentNumber}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          <FaWhatsapp size={30} />
        </a>
      ) : (
        // Si no está en una ruta específica, muestra el dropdown
        <Dropdown className="whatsapp-button">
          <Dropdown.Toggle id="dropdown-basic">
            <FaWhatsapp size={30} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://wa.me/+573205072692" target="_blank">
              360 CARWASH
            </Dropdown.Item>
            <Dropdown.Item href="https://wa.me/+573305072693" target="_blank">
              360 OTRA
            </Dropdown.Item>
            <Dropdown.Item href="https://wa.me/+573405072694" target="_blank">
              360 OTRA 2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};
