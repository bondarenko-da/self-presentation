'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'GMCS Verex',
    role: 'Ведущий Разработчик / Архитектор SQL DWH',
    period: 'Октябрь 2021 — настоящее время',
    duration: '4+ года',
    location: 'Москва',
    description: 'Системная интеграция, корпоративные хранилища данных.',
    responsibilities: [
      'Архитектура и проектирование КХД "с нуля" для крупных компаний',
      'Разработка сложных аналитических витрин на Greenplum, PostgreSQL, MS SQL, ClickHouse',
      'Оптимизация тяжелых запросов к MPP-СУБД, сокращение времени выполнения отчетов в 10 раз',
      'Построение ETL/ELT пайплайнов объемом до 1 ТБ/день на Airflow, NiFi, dbt',
      'Техническое лидерство проектов полного цикла: от оценки до деплоя',
    ],
    technologies: ['Greenplum', 'PostgreSQL', 'MS SQL', 'ClickHouse', 'Airflow', 'NiFi', 'dbt', 'Python', 'Azure'],
    projects: ['GAGAWA', 'Сколково', 'Счетная палата РФ', 'ТМК', 'Восток-Сервис', 'X5 Retail Group', 'Ростелеком'],
  },
  {
    company: 'Спортмастер Россия',
    role: 'Аналитик (SQL / Python)',
    period: 'Октябрь 2019 — Сентябрь 2021',
    duration: '2 года',
    location: 'Москва',
    description: 'Розничная торговля, аналитика данных.',
    responsibilities: [
      'Разработка аналитической отчётности и витрин на Oracle SQL',
      'Ad-hoc запросы и выгрузки из DWH',
      'Автоматизация обработки данных на Python (pandas/numpy)',
      'Построение расчётных моделей, прогнозирование',
    ],
    achievements: [
      'Разработал прогнозную модель продаж, увеличившую прибыль компании (~5%)',
      'Создал модель оптимизации складских площадей, снизившую издержки (~10%)',
    ],
    technologies: ['Oracle SQL', 'Python', 'pandas', 'numpy'],
  },
  {
    company: 'Росгосстрах Банк',
    role: 'Начальник отдела аналитической поддержки',
    period: 'Ноябрь 2017 — Октябрь 2019',
    duration: '2 года',
    location: 'Москва',
    description: 'Банковская сфера, аналитическая поддержка бизнеса.',
    responsibilities: [
      'Разработка регулярной банковской отчётности',
      'Разработка витрин данных, SQL-процедур, функций, триггеров',
      'Расчёт KPI и мотивации сотрудников',
      'Руководство командой, постановка задач',
    ],
    achievements: [
      'Повысил эффективность работы бизнес-подразделений (~20%)',
      'Автоматизировал систему расчета KPI, сэкономив ручной труд (~80%)',
    ],
    technologies: ['Oracle PL/SQL', 'MS SQL', 'Excel/VBA'],
  },
  {
    company: 'Софткей (Softkey)',
    role: 'Аналитик SQL',
    period: 'Февраль 2013 — Ноябрь 2017',
    duration: '4 года 10 месяцев',
    location: 'Москва',
    description: 'E-commerce, онлайн-продажи ПО.',
    responsibilities: [
      'Разработка управленческой отчётности (PostgreSQL / Oracle)',
      'Построение KPI, мониторинг работы продаж и колл-центра',
      'Аналитика и план-факт анализ',
      'Автоматизация отчётов на Excel/VBA',
    ],
    achievements: [
      'Автоматизировал значительную часть отчётности компании (~50%)',
      'Улучшил качество управленческих решений (рост порядка 15% в год)',
    ],
    technologies: ['PostgreSQL', 'Oracle', 'MS SQL', 'Excel/VBA', 'ARIS'],
  },
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

export function Experience() {
  const { isInView, ref } = useInView(0.1)

  return (
    <section
      id="experience"
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
            Опыт <span className="gradient-text">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 13 лет опыта в аналитике и разработке хранилищ данных
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:col-start-2 md:pl-12'
                  } pl-8 md:pl-0`}
                >
                  <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.slice(0, 3).map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <ChevronRight className={`w-4 h-4 text-primary flex-shrink-0 mt-0.5 ${index % 2 === 0 ? 'md:rotate-180' : ''}`} />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mb-4">
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
