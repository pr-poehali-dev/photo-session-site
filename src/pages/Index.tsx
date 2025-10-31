import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!date || !selectedTime) {
      toast({
        title: "Ошибка",
        description: "Выберите дату и время съемки",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const pricingPlans = [
    {
      title: 'Базовый',
      price: '1 500 ₽',
      duration: '1 час',
      features: [
        '30+ обработанных фото',
        'Съемка в студии',
        'Готовность через 5 дней',
        'Базовая ретушь'
      ]
    },
    {
      title: 'Стандарт',
      price: '2 500 ₽',
      duration: '2 часа',
      features: [
        '60+ обработанных фото',
        'Студия или локация',
        'Готовность через 3 дня',
        'Профессиональная ретушь',
        'Помощь в выборе образа'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: '3 500 ₽',
      duration: '4 часа',
      features: [
        '100+ обработанных фото',
        'Любая локация',
        'Готовность через 2 дня',
        'Расширенная ретушь',
        'Стилист и визажист',
        'Видеосъемка (1 мин)'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1F2C] via-[#2A1F3D] to-[#1A1F2C]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="mb-6 inline-block">
              <Icon name="Camera" size={64} className="text-primary mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              Запечатлеем моменты
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Профессиональная фотосъемка для тех, кто ценит качество и индивидуальный подход
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                    Записаться на съемку
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Онлайн-запись на фотосессию</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя *</Label>
                          <Input id="name" name="name" required placeholder="Ваше имя" />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="your@email.com" />
                        </div>
                        
                        <div>
                          <Label htmlFor="time">Время съемки *</Label>
                          <Select value={selectedTime} onValueChange={setSelectedTime} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            placeholder="Расскажите о своих пожеланиях к съемке"
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Выберите дату *</Label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                          className="rounded-md border"
                        />
                        {date && (
                          <p className="text-sm text-muted-foreground">
                            Выбрана дата: {date.toLocaleDateString('ru-RU')}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/ceaf5f93-2061-4741-bb29-15f5aa46ea26.jpg" 
                  alt="Фотограф с камерой" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">Обо мне</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>Привет! Я профессиональный фотограф   Моя специализация — создание живых, эмоциональных снимков, которые рассказывают истории.</p>
                <p>
                  Каждая фотосессия для меня — это возможность раскрыть индивидуальность человека, поймать искреннюю эмоцию и создать изображения, которые будут радовать вас долгие годы.
                </p>
                <p>
                  Работаю в различных жанрах: портретная съемка, family-фотосессии, свадьбы, love story, коммерческая фотография.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
            <p className="text-xl text-gray-400">Выберите подходящий пакет для вашей съемки</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.title}
                className={`relative transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                  plan.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="text-lg">{plan.duration}</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full mt-6" 
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        Выбрать пакет
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Онлайн-запись на фотосессию</DialogTitle>
                        <DialogDescription>
                          Пакет: {plan.title} - {plan.price}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form onSubmit={handleBooking} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Имя *</Label>
                              <Input id="name" name="name" required placeholder="Ваше имя" />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone">Телефон *</Label>
                              <Input id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" />
                            </div>
                            
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" name="email" type="email" placeholder="your@email.com" />
                            </div>
                            
                            <div>
                              <Label htmlFor="time">Время съемки *</Label>
                              <Select value={selectedTime} onValueChange={setSelectedTime} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите время" />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="message">Комментарий</Label>
                              <Textarea 
                                id="message" 
                                name="message" 
                                placeholder="Расскажите о своих пожеланиях к съемке"
                                className="min-h-[100px]"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <Label>Выберите дату *</Label>
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                              className="rounded-md border"
                            />
                            {date && (
                              <p className="text-sm text-muted-foreground">
                                Выбрана дата: {date.toLocaleDateString('ru-RU')}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-400">Свяжитесь со мной удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader className="py-12">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Телефон</CardTitle>
                    <CardDescription className="text-2xl">+7 (958) 188-57-51</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="animate-scale-in hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader className="py-12">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name="Mail" size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Email</CardTitle>
                    <CardDescription className="text-2xl">andrejpozidaev8895@mail.ru</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="animate-scale-in hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 md:col-span-2">
              <CardHeader className="py-12">
                <div className="flex items-center justify-center gap-6">
                  <div className="p-5 bg-primary/10 rounded-full">
                    <Icon name="Send" size={40} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-2xl mb-2">Telegram</CardTitle>
                    <CardDescription className="text-3xl">@dishvkc</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Camera" size={32} className="text-primary" />
            <span className="text-2xl font-bold">Фотосессия</span>
          </div>
          <p className="text-gray-400 mb-6">Запечатлеваем моменты, создаем воспоминания</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-gray-500">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;