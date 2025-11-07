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

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
              Профессиональный автосервис в центре города
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Более 10 лет опыта. Сертифицированные мастера. Гарантия на все работы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('contacts')}>
                Записаться на сервис
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Award" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">10+ лет опыта</h3>
                <p className="text-muted-foreground">Работаем с 2014 года и знаем всё о современных автомобилях</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Сертифицированные мастера</h3>
                <p className="text-muted-foreground">Команда профессионалов с подтверждёнными навыками</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Shield" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">Гарантия на все виды работ до 12 месяцев</p>
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

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Полный спектр услуг для вашего автомобиля</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={service.icon} size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12">Актуальные цены на основные услуги</p>
          <div className="space-y-8">
            {priceList.map((category, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 text-secondary border-b pb-3">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            * Цены указаны ориентировочные. Точная стоимость определяется после диагностики.
          </p>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Автомобильная, 15</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@avtovuka.ru</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Clock" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Запишитесь на сервис</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                  <Input placeholder="Ваше имя" required />
                  <Input type="tel" placeholder="Телефон" required />
                  <Input placeholder="Марка и модель авто" />
                  <Textarea placeholder="Опишите проблему или услугу" rows={4} />
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Car" size={28} className="text-primary" />
            <span className="text-2xl font-bold">Автовука</span>
          </div>
          <p className="text-white/70 mb-4">Профессиональный автосервис с 2014 года</p>
          <p className="text-white/50 text-sm">© 2024 Автовука. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
