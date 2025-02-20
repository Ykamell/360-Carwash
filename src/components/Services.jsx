import { FaHome, FaOilCan, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "360 CARWASH",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaHome />,
    buttonText: "VER SERVICIOS",
    link: "/360carwash"
  },
  {
    title: "360 OTRA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaOilCan />,
    buttonText: "VER SERVICIOS",
    link: "/360otra"
  },
  {
    title: "360 OTRA 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaTools />,
    buttonText: "VER SERVICIOS",
    link: "/360otra2"
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button" onClick={() => navigate(`${service.link}`)}>{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
