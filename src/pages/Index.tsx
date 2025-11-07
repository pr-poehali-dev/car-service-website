import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Полный комплекс работ по ТО любой сложности',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Ремонт двигателя',
      description: 'Диагностика и ремонт всех типов двигателей',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Диагностика',
      description: 'Компьютерная диагностика всех систем авто',
      price: 'от 1 500 ₽'
    },
    {
      icon: 'Disc',
      title: 'Шиномонтаж',
      description: 'Замена, балансировка, хранение колёс',
      price: 'от 800 ₽'
    },
    {
      icon: 'Zap',
      title: 'Электрика',
      description: 'Ремонт электрооборудования и проводки',
      price: 'от 2 000 ₽'
    },
    {
      icon: 'Car',
      title: 'Кузовной ремонт',
      description: 'Устранение вмятин, покраска, полировка',
      price: 'от 4 000 ₽'
    }
  ];

  const priceList = [
    { category: 'Техническое обслуживание', items: [
      { name: 'ТО-1 (до 15 000 км)', price: '3 000 ₽' },
      { name: 'ТО-2 (до 30 000 км)', price: '5 500 ₽' },
      { name: 'ТО-3 (до 45 000 км)', price: '7 000 ₽' },
    ]},
    { category: 'Диагностика', items: [
      { name: 'Компьютерная диагностика', price: '1 500 ₽' },
      { name: 'Диагностика ходовой части', price: '1 000 ₽' },
      { name: 'Диагностика двигателя', price: '2 000 ₽' },
    ]},
    { category: 'Шиномонтаж', items: [
      { name: 'Снятие/установка колеса R13-R16', price: '800 ₽' },
      { name: 'Снятие/установка колеса R17-R20', price: '1 200 ₽' },
      { name: 'Балансировка', price: '400 ₽' },
    ]}
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">Автовука</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'price', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-secondary/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'price' && 'Прайс'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
              Надёжность • Качество • Профессионализм
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-secondary leading-[1.1]">
              Автосервис полного цикла Автовука
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 font-medium">
              Комплексное техническое обслуживание и ремонт автомобилей с 2014 года. Гарантия качества до 12 месяцев.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="text-base font-semibold px-8" onClick={() => scrollToSection('contacts')}>
                Записаться на диагностику
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8" onClick={() => scrollToSection('services')}>
                Услуги и цены
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground font-medium">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground font-medium">довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-medium">гарантия качества</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Опыт работы с 2014 года</h3>
                <p className="text-foreground/60 leading-relaxed">Более 10 лет безупречной репутации на рынке автомобильных услуг</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Сертифицированные специалисты</h3>
                <p className="text-foreground/60 leading-relaxed">Команда мастеров с официальными сертификатами и регулярным повышением квалификации</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Гарантия на работы</h3>
                <p className="text-foreground/60 leading-relaxed">Официальная гарантия до 12 месяцев на все виды выполненных работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-secondary">О нашем автосервисе</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Автосервис <span className="font-semibold text-primary">Автовука</span> — это команда профессионалов, которые знают всё о вашем автомобиле. Мы работаем с 2014 года и за это время обслужили более 5000 автомобилей.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Наш автосервис оснащён современным оборудованием для диагностики и ремонта автомобилей любых марок. Мы используем только оригинальные запчасти и проверенные расходные материалы.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
              <div className="flex gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Прозрачное ценообразование</h4>
                  <p className="text-muted-foreground text-sm">Фиксированные цены без скрытых доплат</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Быстрое обслуживание</h4>
                  <p className="text-muted-foreground text-sm">Большинство работ выполняем в день обращения</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Комфортная зона ожидания</h4>
                  <p className="text-muted-foreground text-sm">Wi-Fi, кофе и удобные кресла для клиентов</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Гарантия на работы</h4>
                  <p className="text-muted-foreground text-sm">До 12 месяцев гарантии на все виды услуг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Спектр услуг</h2>
            <p className="text-lg text-foreground/60">Полный комплекс работ по техническому обслуживанию и ремонту автомобилей всех марок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-border shadow-sm hover:border-primary/50 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 mb-6 leading-relaxed">{service.description}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground font-medium">Стоимость</span>
                    <p className="text-primary font-bold text-xl mt-1">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-24 px-4 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Прайс-лист услуг</h2>
            <p className="text-lg text-foreground/60">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="space-y-6">
            {priceList.map((category, index) => (
              <Card key={index} className="border-2 border-border shadow-sm">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-8 text-secondary flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    {category.category}
                  </h3>
                  <div className="space-y-5">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                        <span className="text-foreground/80 font-medium">{item.name}</span>
                        <span className="font-bold text-xl text-secondary whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-foreground/70 font-medium">
              <Icon name="Info" size={18} className="inline mr-2 text-primary" />
              Указаны базовые расценки. Финальная стоимость работ определяется после комплексной диагностики автомобиля.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Контактная информация</h2>
            <p className="text-lg text-foreground/60">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2 border-border shadow-sm p-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Адрес сервисного центра</h4>
                    <p className="text-foreground/70">г. Москва, ул. Автомобильная, д. 15</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 border-border shadow-sm p-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Телефон для связи</h4>
                    <p className="text-foreground/70 text-lg font-semibold">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 border-border shadow-sm p-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Электронная почта</h4>
                    <p className="text-foreground/70">info@avtovuka.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 border-border shadow-sm p-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Режим работы</h4>
                    <p className="text-foreground/70">Понедельник — Пятница: 9:00 - 20:00</p>
                    <p className="text-foreground/70">Суббота — Воскресенье: 10:00 - 18:00</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="border-2 border-primary shadow-md">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6">Записаться на обслуживание</h3>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Заявка принята! Наш менеджер свяжется с вами в ближайшее время.'); }}>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Ваше имя *</label>
                    <Input placeholder="Иван Иванов" required className="border-2" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Контактный телефон *</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required className="border-2" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Марка и модель автомобиля</label>
                    <Input placeholder="Toyota Camry" className="border-2" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Описание проблемы</label>
                    <Textarea placeholder="Опишите, какие работы необходимо выполнить" rows={4} className="border-2" />
                  </div>
                  <Button type="submit" className="w-full text-base font-semibold py-6">Отправить заявку</Button>
                  <p className="text-xs text-center text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4 border-t-4 border-primary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={32} className="text-primary" />
                <span className="text-2xl font-bold">Автовука</span>
              </div>
              <p className="text-white/70 leading-relaxed">Профессиональный автосервис полного цикла. Работаем с 2014 года.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@avtovuka.ru</p>
                <p>г. Москва, ул. Автомобильная, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-white/50 text-sm">© 2024 Автовука. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;