import React from 'react'
import BenefitCard from '../molecules/BenefitCard'
import RatingStars from '../atom/RatingStars'
import { GalleryImage } from '../atom/BenefitIconContainer'
import { FooterLink, SocialIcon } from '../atom/Navigation'
import Logo from '../atom/Logo'
import WhyUsListItem from '../molecules/WhyUsListItem'
import GalleryInfoCard from '../molecules/GalleryInfoCard'
import CarouselGallery from '../molecules/CarouselGallery'
import { FaCreditCard, FaUndoAlt, FaHeadset, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTruck, FaCheckCircle, FaStar, FaExchangeAlt, FaCreditCard as FaCard } from 'react-icons/fa'

const FinalSection = () => {
  const benefits = [
    {
      icon: <FaCreditCard className="text-teal-600" size={20} />, 
      title: 'Método de pago',
      description: 'Ofrecemos opciones de pago flexibles para facilitarlo.'
    },
    {
      icon: <FaUndoAlt className="text-teal-600" size={20} />,
      title: 'Política de devoluciones',
      description: 'Puedes devolver un producto dentro de 10 días.'
    },
    {
      icon: <FaHeadset className="text-teal-600" size={20} />,
      title: 'Soporte al cliente',
      description: 'Nuestro servicio está disponible 24/7 para ti.'
    }
  ]

  const footerCols = [
    { title: 'My Account', links: [{ name: 'Sign in', href: '#' }, { name: 'Register', href: '#' }, { name: 'Order status', href: '#' }] },
    { title: 'Help', links: [{ name: 'Shipping', href: '#' }, { name: 'Returns', href: '#' }, { name: 'Sizing', href: '#' }] },
    { title: 'Shop', links: [{ name: 'All Products', href: '#' }, { name: 'Bedroom', href: '#' }, { name: 'Dining Room', href: '#' }] },
    { title: 'Legal Stuff', links: [{ name: 'Shipping & Delivery', href: '#' }, { name: 'Terms & Conditions', href: '#' }, { name: 'Privacy & Policy', href: '#' }] }
  ]

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Beneficios */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-serif text-center mb-6">Beneficios para su conveniencia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <BenefitCard key={idx} icon={b.icon} title={b.title} description={b.description} />
            ))}
          </div>
        </div>

        {/* Galería: imágenes + tarjeta informativa (alineadas) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <div className="lg:w-2/3">
            <CarouselGallery images={['/src/assets/img/pansNike.jpg','/src/assets/img/pansNike.jpg','/src/assets/img/pansNike.jpg','/src/assets/img/pansNike.jpg']} />
          </div>

          <div className="lg:w-1/3 flex items-center">
            <div className="w-full">
              <GalleryInfoCard />
            </div>
          </div>
        </div>

        {/* Por qué somos tu mejor opción (sección completa abajo) */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-semibold">¿Por qué somos tu mejor opción?</h3>
            <p className="text-sm text-gray-500 mt-2">Más de 15.000 clientes satisfechos.</p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <li>
                <WhyUsListItem icon={<FaTruck />}>Entregas en 10-12 días — Envío gratuito en compras + $800</WhyUsListItem>
              </li>
              <li>
                <WhyUsListItem icon={<FaCheckCircle />}>100% Productos originales garantizados</WhyUsListItem>
              </li>
              <li>
                <WhyUsListItem icon={<FaStar />}>+5.000 clientes satisfechos — 4.8/5 en reseñas</WhyUsListItem>
              </li>
              <li>
                <WhyUsListItem icon={<FaExchangeAlt />}>Cambios fáciles — 10 días para devoluciones</WhyUsListItem>
              </li>
              <li className="sm:col-span-2">
                <WhyUsListItem icon={<FaCard />}>Pagos seguros con tarjetas y otros métodos</WhyUsListItem>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1 max-w-xs">
              <Logo />
              <p className="mt-4 text-sm text-gray-600">PROXIMAMENTE<br/>+52 9613019755</p>
              <div className="flex items-center gap-3 mt-4">
                <SocialIcon href="#" icon={FaFacebookF} />
                <SocialIcon href="#" icon={FaInstagram} />
                <SocialIcon href="#" icon={FaTwitter} />
                <SocialIcon href="#" icon={FaLinkedinIn} />
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
              {footerCols.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-4 font-semibold uppercase text-gray-800">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <FooterLink key={l.name} href={l.href}>{l.name}</FooterLink>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Smart Hill-Golazo. Todos los derechos reservados.</div>
        </footer>
      </div>
    </section>
  )
}

export default FinalSection
