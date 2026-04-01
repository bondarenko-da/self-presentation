'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Building2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    name: 'ТМК',
    title: 'Корпоративное DWH для металлургической компании',
    description: 'Построение DWH на Greenplum в Yandex Cloud с нуля. Миграция Azure → on-prem, разработка ETL процессов на Airflow + Python.',
    technologies: ['Greenplum', 'Airflow', 'Python', 'Yandex Cloud'],
    category: 'Enterprise DWH',
  },
  {
    name: 'GAGAWA',
    title: 'DWH для логистической компании',
    description: 'Построение DWH на MS SQL Server с нуля, ETL в Azure Data Factory, витрины данных, обработка JSON.',
    technologies: ['MS SQL Server', 'Azure Data Factory', 'Azure Synapse'],
    category: 'Enterprise DWH',
  },
  {
    name: 'Сколково',
    title: 'Корпоративное DWH для инновационного центра',
    description: 'Корпоративное DWH на PostgreSQL, ETL на Apache NiFi, валидация данных, функции и процедуры.',
    technologies: ['PostgreSQL', 'Apache NiFi', 'Python'],
    category: 'Enterprise DWH',
  },
  {
    name: 'Счетная палата РФ',
    title: 'Витрины данных для госсектора',
    description: 'Разработка витрин на Greenplum/PostgreSQL, SQL-разработка под BI для государственных нужд.',
    technologies: ['Greenplum', 'PostgreSQL', 'Power BI'],
    category: 'Government',
  },
  {
    name: 'Восток-Сервис',
    title: 'DWH для производственной компании',
    description: 'DWH на PostgreSQL и ClickHouse, парсинг XML на Python, интеграции на C#.',
    technologies: ['PostgreSQL', 'ClickHouse', 'Python', 'C#'],
    category: 'Production',
  },
  {
    name: 'X5 Retail Group',
    title: 'Витрины для ритейлера',
    description: 'Разработка витрин в Greenplum (Data Vault), построение ETL процессов для обработки больших объёмов данных.',
    technologies: ['Greenplum', 'Data Vault', 'Airflow'],
    category: 'Retail',
  },
  {
    name: 'Ростелеком',
    title: 'DWH для телеком оператора',
    description: 'Разработка витрин в Greenplum (Data Vault 2.0), оптимизация запросов к MPP-системе.',
    technologies: ['Greenplum', 'Data Vault 2.0', 'SQL'],
    category: 'Telecom',
  },
  {
    name: 'НЛМК / ABI / НМЖК',
    title: 'Витрины для промышленных компаний',
    description: 'Витрины и ETL на Impala, Synapse, SSIS, оптимизация запросов для промышленных предприятий.',
    technologies: ['Impala', 'Azure Synapse', 'SSIS'],
    category: 'Production',
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

export function Projects() {
  const { isInView, ref } = useInView(0.1)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ключевые <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реализованные проекты для Enterprise-компаний в различных отраслях
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.title}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '20+', label: 'Проектов' },
            { value: '8+', label: 'Отраслей' },
            { value: '1 ТБ/день', label: 'Объём данных' },
            { value: '10x', label: 'Оптимизация' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl border border-border"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
