import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/logo1.jpg' className='bi me-2' width={180} height={180}>
                      </img>
                  </a>
                <p>
                  Вкус и Пар - лучший выбор
                </p>
</div>
                      <div className='col mb-3'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Адреса магазинов</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> 237693, Читинская область, город Москва, наб. Гоголя, 63</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> 219473, Читинская область, город Подольск, спуск Гагарина, 13
</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h5>Контакты</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> 8(445)336-83-14
                            </a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> vape@mail.ru</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer