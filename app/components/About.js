'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="about py-20 bg-gray-50">
      <div className="about-me container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Image
                src="https://via.placeholder.com/400x500/0563bb/ffffff?text=Emily+Jones"
                alt="Emily Jones"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-4">UI/UX & Graphic Designer</h3>
                <p className="text-gray-600 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Birthday:</strong> <span className="ml-2">1 May 1995</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Website:</strong> <span className="ml-2">www.example.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Phone:</strong> <span className="ml-2">+123 456 7890</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>City:</strong> <span className="ml-2">New York, USA</span>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Age:</strong> <span className="ml-2">30</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Degree:</strong> <span className="ml-2">Master</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Email:</strong> <span className="ml-2">email@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▶</span>
                    <strong>Freelance:</strong> <span className="ml-2 text-green-600">Available</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-600">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. 
                Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
                Sed et consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>

          {/* Stats Counter */}
          <StatsCounter inView={inView} />

          {/* Skills */}
          <Skills inView={inView} />
          <Interests inView={inView} />
          <Testimonials inView={inView} />
          
        </motion.div>
      </div>
    </section>
  )
}

function StatsCounter({ inView }) {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    awards: 0
  })

  useEffect(() => {
    if (inView) {
      const targets = { clients: 232, projects: 521, support: 1463, awards: 24 }
      const duration = 2000
      const interval = 50

      Object.keys(targets).forEach(key => {
        let current = 0
        const increment = targets[key] / (duration / interval)
        
        const timer = setInterval(() => {
          current += increment
          if (current >= targets[key]) {
            current = targets[key]
            clearInterval(timer)
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, interval)
      })
    }
  }, [inView])

  const stats = [
    { icon: '😊', value: counts.clients, label: 'Happy Clients' },
    { icon: '📄', value: counts.projects, label: 'Projects' },
    { icon: '🎧', value: counts.support, label: 'Hours Of Support' },
    { icon: '🏆', value: counts.awards, label: 'Awards' }
  ]

  return (
    <div className='counts container'>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
    </div>
  )
}

function Skills({ inView }) {
  const skills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'PHP', level: 80 },
    { name: 'WordPress/CMS', level: 90 },
    { name: 'Photoshop', level: 55 }
  ]

  return (
    <div className="skills container mt-16">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-secondary">{skill.name}</span>
              <span className="text-primary font-bold">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Interests({ inView }) {
  const interests = [
    { name: 'HTML', icon: '🌐', color: '#ffbb2c' },
    { name: 'CSS', icon: '🎨', color: '#5578ff' },
    { name: 'JavaScript', icon: '💻', color: '#e80368' },
    { name: 'PHP', icon: '🐘', color: '#e361ff' },
    { name: 'WordPress/CMS', icon: '📝', color: '#47aeff' },
    { name: 'Photoshop', icon: '🖌️', color: '#ffa76e' },
    { name: 'Photoshop', icon: '🖌️', color: '#11dbcf' },
    { name: 'Photoshop', icon: '🖌️', color: '#4233ff' },
    { name: 'Photoshop', icon: '🖌️', color: '#b2904f' },
    { name: 'Photoshop', icon: '🖌️', color: '#b20969' },
    { name: 'Photoshop', icon: '🖌️', color: '#ff5828' },
    { name: 'Photoshop', icon: '🖌️', color: '#29cc61' }
  ]

  return (
    <div className="interests container mt-16">
      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="icon-box flex justify-between items-center">
              <h3 className="font-medium text-secondary">{interest.name}</h3>
              <i className={`${interest.icon} text-primary font-bold`} style={{ color: interest.color }}>{interest.icon}</i>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Testimonials({ inView }) {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Company',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Jane Smith',
      role: 'Designer, Studio',
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/100'
    }
  ]

  return (
    <div class="testimonials container">

      <div class="section-title">
        <h2>Testimonials</h2>
      </div>

      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>

      <div class="owl-carousel testimonials-carousel">

      </div>

    </div>
  )
}