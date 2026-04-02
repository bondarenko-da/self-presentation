'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Database, GitBranch, Users, Award, Target, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: Database,
    title: 'Архитектура DWH',
    description: 'Проектирование корпоративных хранилищ данных "под ключ" для Enterprise-компаний',
  },
  {
    icon: GitBranch,
    title: 'ETL/ELT процессы',
    description: 'Построение пайплайнов обработки данных объемом до 1 ТБ/день',
  },
  {
    icon: Users,
    title: 'Лидерство',
    description: 'Руководство командами разработчиков, техническое лидерство и менторинг',
  },
  {
    icon: Award,
    title: 'Качество',
    description: 'Ориентация на промышленную разработку, документирование и ответственность',
  },
  {
    icon: Target,
    title: 'Оптимизация',
    description: 'Сокращение времени выполнения отчетов в 10 раз за счёт оптимизации SQL',
  },
  {
    icon: Lightbulb,
    title: 'Инновации',
    description: 'Внедрение современных методологий: Data Vault 2.0, Kimball, Inmon',
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

export function About() {
  const { isInView, ref } = useInView(0.2)

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            О <span className="gradient-text">себе</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный профиль и ключевые достижения
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Разработчик и архитектор корпоративных хранилищ данных (DWH) с опытом{' '}
                <span className="text-foreground font-semibold">13+ лет</span> в аналитике и разработке,
                из них <span className="text-foreground font-semibold">4+ года</span> в роли ведущего
                разработчика / архитектора DWH в системной интеграции и крупных корпоративных проектах.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Имею богатый опыт проектирования и создания корпоративных хранилищ данных, в т.ч.
                &laquo;с нуля&raquo; для Enterprise-компаний в сферах: ритейл, производство, телеком,
                госсектор, финсектор.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Проектирую и внедряю DWH &laquo;под ключ&raquo;: архитектура, модели данных, ETL/ELT,
                слои хранилища, витрины данных, оптимизация SQL, Data Quality, историзация (SCD).
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Умею общаться с бизнес-заказчиком, формализовать требования и доводить разработку
                до промышленного внедрения, а также руководить, лидировать и обучать команды разработчиков.
              </p>
            </div>

            {/* Technologies highlight */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Технологии
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Greenplum', 'PostgreSQL', 'MS SQL', 'Oracle', 'ClickHouse', 'Airflow', 'dbt', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
