import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form action="#" method="POST">
        <div>
          <div className="px-8 py-3 bg-white md:px-16">
            <div className="section-title">Contacto</div>
            <div>
              <div className="pb-5">
                <div>Nombre</div>
                <input className="form-control" type="text" placeholder="Nombre" />
              </div>
              <div className="pb-5">
                <div>Email</div>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div className="pb-5">
                <div>Comentarios</div>
                <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
