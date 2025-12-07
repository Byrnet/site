const { useState } = React;

function AuditLanding() {
  const [fileName, setFileName] = useState("Файл не выбран");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Top navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">A</div>
            <div>
              <div className="text-sm font-semibold">Audit & Project</div>
              <div className="text-xs text-gray-500">Оптимизация проектов | Аудит строительства</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#problem" className="hover:text-indigo-600">Проблема</a>
            <a href="#solution" className="hover:text-indigo-600">Решение</a>
            <a href="#cases" className="hover:text-indigo-600">Кейсы</a>
            <a href="#team" className="hover:text-indigo-600">Команда</a>
            <a href="#contact" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">Рассчитать экономию</a>
          </nav>

          <button className="md:hidden p-2 rounded-md border">Меню</button>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Срежем до <span className="text-indigo-600">30%</span> стоимости строительства без изменения архитектуры
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Аудит проектной документации и оптимизация конструктивных решений. 
              <strong> Вы платите только % от реально сэкономленных денег.</strong>
            </p>
            <p className="mt-2 text-gray-600">
              Если не нашли экономию — аудит бесплатно.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium shadow hover:bg-indigo-700 transition-colors">
                Рассчитать потенциал экономии
              </a>
              <a href="#solution" className="py-3 px-6 rounded-md border hover:bg-gray-50 transition-colors">
                Как это работает?
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                <span>СНиП / Eurocode</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                <span>Гарантия прохождения экспертизы</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                <span>20+ лет опыта</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-lg p-6 shadow-lg border border-indigo-100">
            <div className="bg-white rounded-md p-6">
              <h3 className="text-lg font-semibold">Экспресс-оценка за 48 часов</h3>
              <p className="text-sm text-gray-600 mt-1">Загрузите проект — скажем, сколько можно сэкономить.</p>

              <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена! Мы свяжемся с вами в течение 2 часов.'); }}>
                <input required placeholder="Ваше имя" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
                <input required placeholder="Телефон или Email" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
                <select className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none">
                  <option>Жилой комплекс</option>
                  <option>Промышленный объект</option>
                  <option>Офисное здание</option>
                  <option>Торговый центр</option>
                  <option>Реконструкция / Госпроект</option>
                </select>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">Проект или ведомость материалов (PDF, DWG)</label>
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded border transition-colors">
                      Выберите файл
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={(e) => setFileName(e.target.files[0] ? e.target.files[0].name : "Файл не выбран")}
                      />
                    </label>
                    <span className="text-xs text-gray-500 truncate max-w-[150px]">{fileName}</span>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded font-medium hover:bg-indigo-700 transition-colors">
                  Получить бесплатную оценку
                </button>
              </form>
            </div>

            <div className="mt-4 text-sm text-gray-600 text-center">
              <span className="font-semibold text-indigo-600">Гарантия:</span> нет экономии — не платите ничего.
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Почему 9 из 10 проектов раздуты по бюджету?</h2>
          <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">Проблема не в подрядчиках — проблема заложена ещё на этапе проектирования.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-400">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-semibold text-lg">Перестраховка проектировщиков</h3>
              <p className="text-sm text-gray-600 mt-2">
                Конструкторы закладывают двойной запас прочности "на всякий случай". 
                За лишний бетон и арматуру платите вы.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-lg">Устаревшие решения</h3>
              <p className="text-sm text-gray-600 mt-2">
                Типовые узлы 10-летней давности вместо современных материалов и технологий. 
                Дороже и труднее в исполнении.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg">Ошибки в спецификациях</h3>
              <p className="text-sm text-gray-600 mt-2">
                Завышенные объёмы материалов, которые сложно проверить вручную. 
                Десятки миллионов уходят "в никуда".
              </p>
            </article>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Находим скрытые резервы там, где другие не смотрят</h2>
          <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">Прозрачный процесс от первого звонка до сопровождения в экспертизе.</p>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">1</div>
              <h3 className="font-semibold">Экспресс-анализ</h3>
              <p className="text-sm text-gray-600 mt-2">48 часов. Бесплатно оцениваем потенциал оптимизации.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">2</div>
              <h3 className="font-semibold">Перерасчёт нагрузок</h3>
              <p className="text-sm text-gray-600 mt-2">Убираем лишний металл и бетон, сохраняя несущую способность.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">3</div>
              <h3 className="font-semibold">Замена материалов</h3>
              <p className="text-sm text-gray-600 mt-2">Предлагаем аналоги дешевле и проще в монтаже.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-indigo-600">4</div>
              <h3 className="font-semibold">Защита в экспертизе</h3>
              <p className="text-sm text-gray-600 mt-2">Сопровождаем проект до положительного заключения.</p>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section id="cases" className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Кейсы: до и после оптимизации</h2>
          <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">Конкретные цифры экономии на реальных объектах.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="img/cases/residential-complex.jpg" alt="Жилой комплекс" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">ЖК «Солнечный» — 15 000 м²</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Было:</span>
                    <span>Плита 800 мм, арматура d20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Стало:</span>
                    <span>Плита 600 мм, арматура d16</span>
                  </div>
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Экономия:</span>
                    <span>12 млн руб (18%)</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-400">Срок аудита: 7 дней</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="img/cases/industrial-object.jpg" alt="Промобъект" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Склад класса А — 8 000 м²</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Было:</span>
                    <span>Металлокаркас 420 т</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Стало:</span>
                    <span>Металлокаркас 340 т</span>
                  </div>
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Экономия:</span>
                    <span>8.5 млн руб (19%)</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-400">Срок аудита: 5 дней</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="img/cases/reconstruction.jpg" alt="Реконструкция" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Реконструкция школы — 4 500 м²</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Было:</span>
                    <span>Полная замена перекрытий</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Стало:</span>
                    <span>Усиление углепластиком</span>
                  </div>
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Экономия:</span>
                    <span>6 млн руб (24%)</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-400">Срок аудита: 10 дней</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mt-20">
          <div className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">За каждым решением — 20 лет опыта</h2>
                <blockquote className="mt-6 text-lg text-gray-700 italic border-l-4 border-indigo-400 pl-4">
                  "Я лично отвечаю за каждый килограмм убранной арматуры своей репутацией и аттестатом. 
                  Наша задача — не просто сэкономить, а сделать здание надёжнее и технологичнее."
                </blockquote>
                <div className="mt-6">
                  <div className="font-semibold">Антон Бырнет</div>
                  <div className="text-sm text-gray-500">Главный инженер, основатель Audit & Project</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Аттестат ГАП</span>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">100+ объектов</span>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">BY, RU, EU</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center text-6xl">
                  👷
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Частые вопросы</h2>
          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                Сколько времени занимает аудит?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">От 3 до 14 рабочих дней в зависимости от объёма документации. Экспресс-оценка потенциала — за 48 часов.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                Сколько стоит аудит?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">10% от реально сэкономленной суммы. Если экономии нет — вы не платите ничего. Никаких предоплат.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                А если экспертиза не примет изменения?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">Мы сопровождаем проект в экспертизе и отвечаем на все замечания. За 5 лет — 100% положительных заключений.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                Работаете с госзаказчиками?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">Да, у нас есть опыт работы с бюджетными объектами. Все документы оформляем в соответствии с требованиями госэкспертизы.</p>
            </details>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" className="mt-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Узнайте свой потенциал экономии за 48 часов</h2>
              <p className="mt-4 text-indigo-100">
                Отправьте проект или ведомость материалов — мы бесплатно оценим, сколько можно сэкономить на вашем объекте.
              </p>

              <div className="mt-6 space-y-3 text-indigo-100">
                <div className="flex items-center gap-3">
                  <span>📧</span>
                  <span>audit@byrnet.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <span>+375 (29) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>💬</span>
                  <span>Telegram: @audit_project</span>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-lg p-6 text-gray-900" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в течение 2 часов.'); }}>
              <input required placeholder="Ваше имя" className="w-full border rounded px-3 py-2 mb-3 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
              <input required placeholder="Телефон" className="w-full border rounded px-3 py-2 mb-3 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" />
              <textarea placeholder="Коротко о проекте (площадь, тип, стадия)" className="w-full border rounded px-3 py-2 mb-3 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none" rows={3}></textarea>
              <div className="flex gap-2">
                <button className="flex-1 bg-indigo-600 text-white py-3 rounded font-medium hover:bg-indigo-700 transition-colors">
                  Получить оценку
                </button>
                <button type="button" className="py-3 px-4 rounded border hover:bg-gray-50 transition-colors">
                  📞 Перезвоните
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t text-sm text-gray-500">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-gray-900">Audit & Project</div>
              <div className="mt-2">Оптимизация проектных решений и аудит строительства. Минск, Беларусь.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Работаем по нормативам</div>
              <div className="mt-2">СНиП, СП, ТКП, Eurocode. Все решения проходят государственную экспертизу.</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Связаться</div>
              <div className="mt-2">+375 (29) 123-45-67</div>
              <div>audit@byrnet.com</div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 Audit & Project. Все права защищены.
          </div>
        </footer>

      </main>
    </div>
  );
}

ReactDOM.render(<AuditLanding />, document.getElementById('root'));
