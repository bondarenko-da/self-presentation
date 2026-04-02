'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { Database, Code, Cloud, Server, BarChart3, FileCode } from 'lucide-react'

const skillCategories = [
  {
    icon: Database,
    title: 'SQL / Базы данных',
    skills: [
      { name: 'MS SQL Server (T-SQL)', level: 95 },
      { name: 'PostgreSQL (PL/pgSQL)', level: 90 },
      { name: 'Greenplum / Arenadata DB', level: 95 },
      { name: 'Oracle (PL/SQL)', level: 85 },
      { name: 'ClickHouse', level: 80 },
      { name: 'Apache Impala', level: 75 },
    ],
  },
  {
    icon: Code,
    title: 'ETL / ELT',
    skills: [
      { name: 'Apache Airflow', level: 90 },
      { name: 'Apache NiFi', level: 85 },
      { name: 'dbt', level: 85 },
      { name: 'MS SSIS', level: 80 },
      { name: 'Azure Data Factory', level: 80 },
      { name: 'Dagster', level: 70 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', level: 85 },
      { name: 'Yandex Cloud', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Linux / Bash', level: 80 },
    ],
  },
  {
    icon: FileCode,
    title: 'Языки программирования',
    skills: [
      { name: 'Python (pandas, numpy)', level: 85 },
      { name: 'SQL', level: 98 },
      { name: 'Bash', level: 75 },
    ],
  },
  {
    icon: Server,
    title: 'Архитектура DWH',
    skills: [
      { name: 'Data Vault 2.0', level: 95 },
      { name: 'Kimball', level: 90 },
      { name: 'Inmon', level: 85 },
      { name: 'Star Schema', level: 95 },
      { name: 'SCD (Type 0/1/2)', level: 95 },
    ],
  },
  {
    icon: BarChart3,
    title: 'BI & Инструменты',
    skills: [
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 75 },
      { name: 'Confluence', level: 90 },
      { name: 'Jira', level: 90 },
      { name: 'DBeaver', level: 95 },
    ],
  },
]

const additionalSkills = [
  'Data Quality',
  'Data Governance',
  'CDC (Change Data Capture)',
  'Инкрементальная загрузка',
  'Оптимизация SQL',
  'Моделирование данных',
  'MPP-оптимизация',
  'Partitioning',
  'Data Lake',
  'S3',
  'JSON / XML / CSV',
  'CI/CD',
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

export function Skills() {
  const { isInView, ref } = useInView(0.1)

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-accent/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ключевые <span className="gradient-text">навыки</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Технический стек и компетенции в области Data Engineering и DWH
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.8,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card rounded-2xl border border-border p-8"
        >
          <h3 className="font-semibold text-lg mb-6 text-center">
            Дополнительные компетенции
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
