'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, FileText, Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

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
    value: '@DmBond',
    href: 'https://web.telegram.org/',
    note: 'Открыть Telegram',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bondarenko-da@mail.ru',
    href: 'mailto:bondarenko-da@mail.ru',
    note: 'Нажмите для копирования',
    copyable: true,
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
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('bondarenko-da@mail.ru')
      setCopied(true)
      toast.success('Email скопирован!', {
        description: 'bondarenko-da@mail.ru добавлен в буфер обмена',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Ошибка копирования')
    }
  }

  const downloadCV = () => {
    // Create CV content
    const cvContent = `
ДМИТРИЙ БОНДАРЕНКО
Senior Developer | Data Engineer | DWH Architect | Team Lead

========================================
КОНТАКТНАЯ ИНФОРМАЦИЯ
========================================
Телефон: +7 (968) 739-10-20 (WhatsApp / Telegram)
Telegram: @DmBond
Email: bondarenko-da@mail.ru
Локация: Москва (удалённо / гибрид)

========================================
ПРОФЕССИОНАЛЬНЫЙ ПРОФИЛЬ
========================================
Разработчик и архитектор корпоративных хранилищ данных (DWH) с опытом 13+ лет в аналитике и разработке, из них 4+ года в роли ведущего разработчика / архитектора DWH в системной интеграции и крупных корпоративных проектах.

Имею богатый опыт проектирования и создания корпоративных хранилищ данных, в т.ч. "с нуля" для Enterprise-компаний (ритейл, производство, телеком, госсектор, финсектор).

========================================
КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ
========================================
• Разработка и архитектура DWH / КХД (Enterprise Data Warehouse)
• Проектирование моделей данных: Kimball, Inmon, Data Vault 2.0
• Построение слоёв: Raw / Staging / ODS / DDS / Data Marts
• ETL/ELT: Airflow, NiFi, SSIS, Azure Data Factory, dbt
• Оптимизация SQL, индексы, partitioning, MPP-оптимизация
• Витрины данных для BI (Power BI / Tableau)

========================================
ТЕХНИЧЕСКИЙ СТЕК
========================================
SQL/DB: MS SQL Server, PostgreSQL, Oracle, Greenplum, ClickHouse, Impala
ETL/ELT: Apache Airflow, Apache NiFi, MS SSIS, Azure Data Factory, dbt
Cloud: Microsoft Azure, Yandex Cloud
Python: pandas, numpy, sqlalchemy
DevOps: Git, Linux, Docker, SSH
BI: Power BI, Tableau

========================================
ОПЫТ РАБОТЫ
========================================

GMCS Verex | Ведущий Разработчик / Архитектор SQL DWH
Октябрь 2021 — настоящее время (4+ года)
• Архитектура и проектирование КХД "с нуля" для крупных компаний
• Разработка витрин на Greenplum, PostgreSQL, MS SQL, ClickHouse
• Оптимизация запросов - сокращение времени в 10 раз
• ETL/ELT пайплайны объемом до 1 ТБ/день

Спортмастер Россия | Аналитик (SQL / Python)
Октябрь 2019 — Сентябрь 2021 (2 года)
• Разработка аналитической отчётности на Oracle SQL
• Прогнозная модель продаж (+5% прибыли)

Росгосстрах Банк | Начальник отдела аналитической поддержки
Ноябрь 2017 — Октябрь 2019 (2 года)
• Разработка банковской отчётности
• Руководство командой

Софткей (Softkey) | Аналитик SQL
Февраль 2013 — Ноябрь 2017 (4 года 10 месяцев)
• Разработка управленческой отчётности

========================================
КЛЮЧЕВЫЕ ПРОЕКТЫ
========================================
• ТМК - DWH на Greenplum в Yandex Cloud
• GAGAWA - DWH на MS SQL Server, Azure Data Factory
• Сколково - DWH на PostgreSQL, Apache NiFi
• Счетная палата РФ - витрины на Greenplum
• X5 Retail Group - витрины в Greenplum (Data Vault)
• Ростелеком - витрины в Greenplum (Data Vault 2.0)

========================================
ОБРАЗОВАНИЕ
========================================
НИЯУ МИФИ
Факультет управления и экономики высоких технологий
Специальность: Математические методы в экономике
Год окончания: 2003 (красный диплом)

========================================
СЕРТИФИКАТЫ
========================================
• 2025 - Arenadata Catalog: Администратор
• 2024 - Построение корпоративной аналитической платформы (Яндекс Практикум)
• 2023 - Инженер облачных сервисов (Яндекс Практикум)
• 2023 - Arenadata QuickMarts / ADCSQM System Administrator
• 2020 - Python для анализа данных (Нетология)
• 2013 - Microsoft M10774 Querying Microsoft SQL Server 2012

========================================
ЯЗЫКИ
========================================
Русский - родной
Английский - B2 (чтение документации, переписка)
Немецкий - A1
`

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'CV_Бондаренко_Дмитрий.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    toast.success('CV скачан!', {
      description: 'Файл сохранён в папку загрузок',
    })
  }

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
                    onClick={contact.copyable ? copyEmail : undefined}
                    className={`flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group ${
                      contact.copyable ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <div className="flex items-center gap-2">
                        <p className="font-medium hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                        {contact.copyable && (
                          copied ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          )
                        )}
                      </div>
                      {contact.note && (
                        <p className="text-xs text-muted-foreground mt-0.5">{contact.note}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={copyEmail}
                  className="flex-1 gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Скопировано!
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Связаться
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={downloadCV}
                >
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
                    href="https://web.telegram.org/"
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
