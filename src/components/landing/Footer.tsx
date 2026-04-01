'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Send } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                ДБ
              </div>
              <div>
                <p className="font-semibold">Дмитрий Бондаренко</p>
                <p className="text-sm text-muted-foreground">DWH Architect</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Разработчик и архитектор корпоративных хранилищ данных с опытом 13+ лет.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Навигация</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['О себе', 'Навыки', 'Опыт', 'Проекты', 'Контакты'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social & scroll to top */}
          <div className="flex justify-end items-center gap-4">
            <a
              href="https://github.com/bondarenko-da"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/DmABond"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Дмитрий Бондаренко. Создано с{' '}
            <Heart className="w-4 h-4 text-red-500" /> для презентации профессионального опыта.
          </p>
        </div>
      </div>
    </footer>
  )
}
