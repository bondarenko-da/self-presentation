'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contacts = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (968) 739-10-20',
    href: 'tel:+79687391020',
    note: 'WhatsApp / Telegram',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@DmABond',
    href: 'https://t.me/DmABond',
    note: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bondarenko-da@mail.ru',
    href: 'mailto:bondarenko-da@mail.ru',
    note: null,
  },
  {
    icon: MapPin,
    label: 'Локация',
    value: 'Москва (м. Бабушкинская)',
    href: null,
    note: 'Удалённо / Гибрид',
  },
]

function useInView(threshold = 0.2) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { isInView, ref }
}

export function Contact() {
  const { isInView, ref } = useInView(0.2)

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Связаться <span className="gradient-text">со мной</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Открыт к интересным предложениям и новым проектам
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>

              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                      {contact.note && (
                        <p className="text-xs text-muted-foreground mt-0.5">{contact.note}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="flex-1 gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <Mail className="w-4 h-4" />
                  Написать письмо
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <FileText className="w-4 h-4" />
                  Скачать CV
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              {/* Quick highlights */}
              <h3 className="text-xl font-semibold mb-6">Готовность к работе</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">
                      Открыт к предложениям
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Рассматриваю интересные проекты
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="text-sm text-muted-foreground">Формат работы</p>
                    <p className="font-medium">Удалённо / Гибрид</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="text-sm text-muted-foreground">Командировки</p>
                    <p className="font-medium">Редко</p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Желаемая должность</p>
                  <div className="flex flex-wrap gap-2">
                    {['Разработчик SQL', 'DWH Architect', 'Data Engineer', 'Team Lead'].map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Найти меня в соцсетях</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/bondarenko-da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://hh.ru/resume/23da614bff09408dc60039ed1f356377376e41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-sm font-bold"
                  >
                    hh
                  </a>
                  <a
                    href="https://t.me/DmABond"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
