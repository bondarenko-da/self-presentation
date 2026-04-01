'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const education = {
  university: 'НИЯУ МИФИ',
  faculty: 'Факультет управления и экономики высоких технологий',
  specialty: 'Математические методы в экономике',
  year: 2003,
  distinction: 'Красный диплом',
}

const certificates = [
  {
    name: 'Построение корпоративной аналитической платформы',
    issuer: 'Яндекс Практикум',
    year: 2024,
    link: null,
  },
  {
    name: 'Инженер облачных сервисов',
    issuer: 'Яндекс Практикум',
    year: 2023,
    link: null,
  },
  {
    name: 'Arenadata QuickMarts / ADCSQM System Administrator',
    issuer: 'Arenadata',
    year: 2023,
    link: null,
  },
  {
    name: 'Python для анализа данных',
    issuer: 'Нетология',
    year: 2020,
    link: null,
  },
  {
    name: 'Microsoft M10774 Querying Microsoft SQL Server 2012',
    issuer: 'Microsoft',
    year: 2013,
    link: null,
  },
]

const languages = [
  { name: 'Русский', level: 'Родной', percent: 100 },
  { name: 'Английский', level: 'B2', percent: 75, note: 'чтение документации, переписка' },
  { name: 'Немецкий', level: 'A1', percent: 20 },
]

function useInView(threshold = 0.1) {
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

export function Education() {
  const { isInView, ref } = useInView(0.1)

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Образование и <span className="gradient-text">сертификаты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Академическое образование и профессиональное развитие
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Образование</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{education.university}</h4>
                  <p className="text-muted-foreground">{education.faculty}</p>
                </div>

                <div>
                  <p className="font-medium">{education.specialty}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Год окончания: {education.year}</span>
                  </div>
                </div>

                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {education.distinction}
                </Badge>
              </div>

              {/* Languages */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Языки</h4>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {lang.level}
                          {lang.note && <span className="ml-1">({lang.note})</span>}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percent}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Сертификаты</h3>
              </div>

              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group flex items-start justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Профессиональные интересы</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ориентирован на архитектуру и промышленную разработку DWH. Умею работать
                  с бизнесом и техническими командами. В проектах ценю качество,
                  предсказуемость, документирование и ответственность за результат.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
