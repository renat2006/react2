const normalizedBooks = [
  {
    id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    tag: "Художественная литература",
  },

  {
    id: "4a313611-b4be-40a4-9935-c8daf16351b1",
    tag: "Нехудожественная литература",
  },

  {
    id: "9d9c6329-dc0e-409a-84f5-d00072860cff",
    tag: "Книги для детей",
  },

  {
    id: "7bcd4895-5460-41f4-bd33-75b9a0e6404a",
    tag: "Переодические издания",
  },

  {
    id: "5906376e-6a99-41a4-80c3-53c24eb3f297",
    tag: "Религия",
  },

  {
    id: "860b9a15-9d9a-4c2e-8c1a-cc28e1550f1c",
    tag: "Учебная литература",
  },

  {
    id: "c895063c-7027-4013-a4ea-89cefa782a6c",
    tag: "Комиксы",
  },
];

const normalizedBook = [
  {
    id: "9d3d3380-ced1-4a97-8e2f-885e6e4ff99b",
    genreId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Несносное проклятье некроманта",
    author: "Блинова Маргарита",
    genre: "Фэнтези",
    rating: "4",
    price: "250",
    annotation:
      'Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить "что-нибудь для вечной любви"? Подумай о некромантии!',
    reviews: [
      {
        id: "9130c2e7-72e0-4ad6-a7a4-92b0a6c0c2ba",
        name: "Анна К.",
        text: 'С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".',
        rating: "5",
      },

      {
        id: "ab0cd9cf-3092-40a8-a07a-3766a9749d32",
        name: "Любмила Н.",
        text: 'С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".',
        rating: "5",
      },

      {
        id: "540a0414-42a8-4e10-abd7-67a95e6a509d",
        name: "Валентина П.",
        text: "Начало весьма непредсказуемое, и непонятно кто или что из себя представляет героиня. Повествование сумбурное, словно не книгу читаешь, а над ухом кто-то трещит и быстро-быстро что-то пересказывает. Перескакивает с одного на другое очень быстро, что приходилось перечитывать многие моменты. В прологе они на кладбище, их хотят изгонять, а потом резко замке. А там вообще страшные события происходят и молодой девочке хоть бы хны, хотя она не некромант. Но хоть с половины истории чтение завлекло. Соответствует заявленному жанру - юмористическому фентези, но больше склоняется к черному юмору.",
        rating: "3",
      },
    ],
  },
  {
    id: "d1e0500b-84b6-4096-8d87-469794499d23",
    genreId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Фрейлина. Моя невероятная жизнь в тени Королевы",
    author: "Энн Гленконнер",
    genre: "Современная зарубежная проза",
    rating: "5",
    price: "560",
    annotation:
      "Благодаря своим знатным родителям леди Энн Гленконнер c детства дружила с будущей королевой Елизаветой II и ее сестрой, принцессой Маргарет. Но как дочь, не могла наследовать фамильное имение своего отца - одного из крупнейших землевладельцев Англии. Поэтому Энн понадобились вся ее стойкость, шарм и чувство юмора, чтобы зарекомендовать себя при королевском дворе.",
    reviews: [
      {
        id: "006b3f58-3d2a-4cf8-a364-b0d065b4b77c",
        name: "Елена Н.",
        text: "Мемуары, да это не роман а именно мемуары, читаются очень легко. Стиль автора лаконичен и ироничен. Автор прекрасно знает, какую информацию и как необходимо подать, чтобы заинтересовать слушателя. Это история светского человека, прекрасно образованного, интересного рассказчика. Перевод отличный. В том, что касается содержания, то будет заблуждением считать, что это история женщины богатой с рождения. Скорее это история женщины с рождения обязанной следовать правилам, нормам, уметь себя вести и правильно подавать. История женщины для которой светские обязанности, долг и отсутствие эмоций -норма жизни. Автор очень откровенен в этой книге только в одном: в своих рассуждениях о том, что главнее семьи и детей в жизни нет ничего, и какой ценой дается светская жизнь. Упущенное время и упущенные возможности. Очень честное признание.",
        rating: "5",
      },
    ],
  },
  {
    id: "d1a5b34f-4f1b-4409-a93b-cb111a825642",
    genreId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Идти бестрепетно. Между литературой и жизнью",
    author: "Евгений Водолазкин",
    genre: "Эссе, письма, очерки",
    rating: "4",
    price: "905",
    annotation:
      '"Призвание писателя - быть блюдцем на спиритическом сеансе: крутиться в центре стола и составлять из букв тексты. Писательство - это, по сути, называние. Присвоение слов тому, что волновало, но оставалось безымянным - будь то соленая хрупкость кожи после пляжа или проветривание (морозное марево в форточке) больничной палаты. Первым писателем был Адам, которому Господь дал право наименовать окружавших его животных. Давая животным имена, Адам перевел их из единичного в общее - и сделал достоянием всех. Дело писателя - ловить музыку сфер и переводить ее в ноты. Быть, если угодно, "лучшим акыном степи": петь о том, что видит. Что, подчеркну, видят и все там живущие. А поет - только он, потому что он способен превращать степь в текст". Евгений Водолазкин',
    reviews: [
      {
        id: "a2cf9bf6-999f-4551-b102-e1a11abd62cc",
        name: "Галина Р.",
        text: 'А я расстроена. Творчество Е. Водолазкина для меня безусловно, но с радостью открыв книгу обнаружила, что большая часть литературных эссе и повесть "Близкие друзья" ранее вошли в сборник "Совсем другое время". Честно говоря, я не знаю как к этому относиться.',
        rating: "4",
      },
    ],
  },
  {
    id: "816198dd-177a-443d-8afa-e4be2410e4c5",
    genreId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "О революции и гражданской войне",
    author: "Бунин, Куприн",
    genre: "Эссе, письма, очерки",
    rating: "5",
    price: "480",
    annotation:
      "В сборник классиков русской литературы Ивана Алексеевича Бунина (1870-1953) и Александра Ивановича Куприна (1870- 1938) вошли их документальные и публицистические произведения, посвященные революции 1917 года и Гражданской войне. Оба писателя не приняли прихода к власти большевиков. Бунин с началом Гражданской войны перебрался на юг России, где уже зародилось Белое движение, а затем был вынужден и вовсе эмигрировать. Куприн в 1919 году вступил в чине поручика в Северо- Западную армию генерала Юденича, после поражения которой также оказался в эмиграции. Взяв в руки этот том, читатель поймет причины активного неприятия обоими писателями произошедших в России перемен. Это крайне важно знать для объективного взгляда на историю XX века.",
    reviews: [
      {
        id: "006b3f58-3d2a-4cf8-a364-b0d065b4b77c",
        name: "Марина Г.",
        text: "Супер!",
        rating: "5",
      },
    ],
  },
  {
    id: "4664d172-f9e4-4d14-9059-652ba8b55c0d",
    genreId: "4a313611-b4be-40a4-9935-c8daf16351b1",
    name: "Тортомания. Торты и пирожные, чизкейки и тарты, которые легко приготовить",
    author: "Татьяна Назарук",
    genre: "",
    rating: "5",
    price: "777",
    annotation:
      "Принято считать, что торт - это исключительно праздничная выпечка. И обязательно сложная. Эта книга опровергает оба стереотипа: здесь собраны рецепты тортов, чизкейков и пирожных, которые можно без особого труда приготовить на домашней кухне. И вам точно захочется это сделать, не дожидаясь торжественного повода. А чтобы вы чувствовали себя увереннее, автор подготовила статьи о самых важных базовых кондитерских техниках. Из них вы узнаете все нюансы приготовления заварного теста и ганаша, взбивания сливок и меренги. И помните главное: совсем не обязательно ждать праздника, чтобы побаловать себя кусочком торта.",
    reviews: [
      {
        id: "cb8f62a7-6885-4a42-8a7e-bba92641dc23",
        name: "Евгений М.",
        text: "Книга «Тортомания» подойдет для тех, кто хочет понять азы – научиться работать с заварным тестом, чтобы радовать семью эклерами, или приготовить простые, знакомые с детства тортики. Листать книгу приятно. Бумага матовая, страницы плотные, поэтому картинки выглядят «съедобными». Если открыть книгу на любой странице, то можно не бояться, что разворот закроется, удобно обращаться к рецепту во время готовки. В каждой странице прописано, на какую форму рассчитано количество ингредиентов, поэтому можно уменьшать или увеличивать по своим пропорциям. Книга подойдет тем, кто не хочет заморачиваться с технологией, но любит классические рецепты и стремится их повторить.",
        rating: "5",
      },
      {
        id: "5f10489f-6bc0-419c-88da-ac047caee7b3",
        name: "Шура Г.",
        text: "Много кондитеров позиционируют приготовление тортов как что-то сложное и доступное только профессионалам. Книга Тортомания рушит это утверждение — торты могут готовить все! В начале книги есть хорошая теоретическая часть с основами кондитерского дела, которые применяются в рецептах книги: все, что нужно знать о шоколадном ганаше и меренге, как правильно взбивать сливки и тд. В начале каждого рецепта есть вкусовое описание торта или рекомендация к ингредиентам — это помогает хорошо ориентироваться в том, какой торт вы хотите приготовить. Например, в основе с сухим и рассыпчатым тестом или влажным и сочным.",
        rating: "5",
      },
    ],
  },
  {
    id: "47505070-5c45-4d3e-a98f-61c8fd8f1b45",
    genreId: "4a313611-b4be-40a4-9935-c8daf16351b1",
    name: "ПроСТО кухня с Александром Бельковичем. Шестая книга",
    author: "Александр Белькович",
    genre: "",
    rating: "5",
    price: "735",
    annotation:
      "Новая книга Александра Бельковича заряжена на все хорошее и позитивное, энергия этой книги будет оберегать ваши дома от невкусной еды! Это шестая книга серии по мотивам популярной телепередачи «ПроСТО кухня» на телеканале СТС, бессменным ведущим которой является Александр. Следуя рецептам из этой книги, вы без труда приготовите легкий перекус, полноценный обед или сытный ужин. Для сторонников «легкости» в тарелке — вега-шаверма с картошкой и авокадо, рыба в апельсинах и лимонах с картошкой карри. Для любителей экзотики — тайская лапша пад-тай, пицца с манго и курицей, свиные ребра в кофейном маринаде. Для сторонников традиционного и проверенного — фирменные чебуреки, домашний «Наполеон» и многое другое, чем можно порадовать себя, друзей и семью.",
    reviews: [
      {
        id: "29f39b82-f25d-41f9-92d1-cec7aa80278c",
        name: "Полина Б.",
        text: "Книги Александра всегда сочетают в себе простоту и некую экзотичность блюд, за что я их так люблю. Шестая книга включает в себя несколько вариантов закусок и супов, большая часть книги посвящена горячему и десертам. Раздел с горячим меня покорил блюдами различных кухонь мира, хотя это скорее вариации на тему, но все равно они интересны и доступны по ингредиентам. Внутреннее оформление у книги как всегда минималистично: есть небольшие рисунки на тему еды и фотографии блюд. Пока знакомлюсь с новыми рецептами и жду новую книгу Александра.",
        rating: "5",
      },

      {
        id: "91797ca7-04f0-4e1f-a0de-28f8ddc1cbd1",
        name: "Кристина Д.",
        text: "Эта книга, чтобы радовать родных каждый день. Очень простые рецепты из самых доступных продуктов. Смотрю все рубрики и программы Александра по телевидению и очень рада, что он успевает еще и книги писать! Все рецепты из шоу не упомнишь, а тут есть книга, которая всегда под рукой. Каждый день выбираю что-нибудь новенькое, готовлю, а потом слушаю комплименты и похвалу моим кулинарным талантам). С помощью этой книги можно построить целый рацион. В ней есть все: закуски, завтраки, горячие блюда, десерты. Все такое необычное и абсолютно несложное. Люблю книги Бельковича за пошаговые фото инструкции, так чувствуешь уверенность, что в процессе готовки все получается правильно.",
        rating: "5",
      },
    ],
  },
  {
    id: "816cc350-84b4-4f6e-9c2f-704465426625",
    genreId: "9d9c6329-dc0e-409a-84f5-d00072860cff",
    name: "Поллианна",
    author: "Элинор Портер",
    genre: "Книги для девочек",
    rating: "5",
    price: "885",
    annotation:
      'За годы своей писательской карьеры Элинор Портер создала четыре тома коротких рассказов и четырнадцать романов, но своей всемирной и неувядающей славой она обязана феноменальному успеху вышедшей в свет в 1913 году повести для детей "Поллианна". Книга сразу же встретила восторженный прием у читателей всех возрастов, и спрос на нее не могли удовлетворить миллионные тиражи. И даже сейчас, спустя сотню лет, к ней часто обращаются театральные и кинорежиссеры, продолжают выходить переиздания. Бессмертную повесть о девочке, готовой щедро делиться душевным теплом со всеми, кто ее окружает, проиллюстрировала Александра Лиукконен - художница, создающая картины для людей, "которые не разучились верить в чудеса и волшебство…" Для среднего и старшего школьного возраста.',
    reviews: [
      {
        id: "5625d84c-e963-4440-b736-1531474b3865",
        name: "Дарья М.",
        text: "Книга отличная, с шикарными иллюстрациями, вроде бы оправдывает свою цену, но есть одно большое НО. В книге очень много опечаток, странно, что никто про это ещё не написал. Прочитав ребёнку половину, заметила уже штук 5, то не стоит точка, то имя по другому написано, то ещё какая - нибудь пусть и мелочь, но неприятная. Просьба издательство обратить на это внимание!",
        rating: "5",
      },
    ],
  },
  {
    id: "e9b326e5-d5bd-44b9-b227-effac5c2b44e",
    genreId: "9d9c6329-dc0e-409a-84f5-d00072860cff",
    name: "Василькин Д. Седьмой отряд",
    author: "Виктория Ледерман",
    genre: "Приключения. Детективы",
    rating: "5",
    price: "660",
    annotation:
      'Долгожданные каникулы наконец наступили, и выпускник третьего класса Дима Василькин впервые едет в летний лагерь. Будем откровенны: сама поездка ему была не очень интересна - наш герой просто готовил сюрприз лучшему другу. Как удивился бы Костик, обнаружив, что они проведут лето вместе! Только вот судьба преподносит свои сюрпризы!.. Кажется, каникулы безнадёжно испорчены. Или всё-таки нет?.. Виктория Ледерман давно знакома читателям как классик современной детской литературы и лауреат множества премий, среди которых - "Книгуру", Корнейчуковская, Крапивинская, "Алиса", посвящённая памяти Кира Булычёва. Герои книг Виктории Ледерман - мальчишки и девчонки, которые попадают в самые необычайные обстоятельства, позволяющие им не только проверить свою дружбу на прочность, но и лучше узнать себя.',
    reviews: [
      {
        id: "634d38e6-f1d0-444a-a4c4-7a4f7fab668d",
        name: "Мария Б.",
        text: "Обожаем волшебницу Викторию Ледерман! За те чудесные и светлые книги, которыми она делится с миром. Написанные простым и понятным для ребенка языком, они захватывают всё твое внимание. Такие истории с удовольствием читаются ночью под одеялом с фонариком. Эти книги точно подойдут всем, кто хочет приобщить ребенка к чтению. Мы с детьми, кажется, перечитали все ее книги и не перестаем повторять: пишите еще)))",
        rating: "5",
      },
    ],
  },
  {
    id: "6294e52e-c4c8-42e7-9654-70fe2c540c75",
    genreId: "7bcd4895-5460-41f4-bd33-75b9a0e6404a",
    name: "Знание-сила. 2022. № 10",
    author: "Алексеева Н. В.",
    genre: "Переодические издания",
    rating: "0",
    price: "260",
    annotation:
      "В минувшем сентябре мир отметил 165-летие мыслителя, ученого, не только подарившего человечеству мечту о полетах в космос, но и предложившего технические решения для осуществления этой идеи. Речь о Константине Эдуардовиче Циолковском, которого по праву называют родоначальником космонавтики. Но Циолковский, мечтая об освоении космоса, думал в первую очередь не о решении технических проблем. Им владела идея выхода человечества за пределы Земли, освоения других планет - одна из ключевых идей космизма. Что такое космизм? Википедия дает следующий ответ...",
    reviews: [],
  },
  {
    id: "9d684866-13bd-45d8-82c9-ff0314e26f39",
    genreId: "7bcd4895-5460-41f4-bd33-75b9a0e6404a",
    name: "Журнал Юность. 2022. № 8",
    author: "Шаргунов Сергей Александрович",
    genre: "Переодические издания",
    rating: "0",
    price: "160",
    annotation:
      "Литературно-художественный и общественно-политический журнал «Юность» издаётся с 1955 года. В разное время в «Юности» публиковались такие замечательные поэты и прозаики, как Анна Ахматова, Евгений Евтушенко, Николай Рубцов, Василий Аксёнов, Борис Васильев, Юнна Мориц, Новелла Матвеева, Иосиф Бродский, Саша Соколов, Юрий Кузнецов, Анатолий Алексин, Кирилл Ковальджи и многие другие — практически весь цвет нашей многонациональной литературы. В наш редакционный совет входили такие мастера, как Белла Ахмадулина, Андрей Вознесенский, Валерий Золотухин, а сейчас продолжают работать Лев Аннинский, Георгий Пряхин, Анна Гедымин, Зоя Богуславская, Елена Исаева и др.",
    reviews: [],
  },
  {
    id: "41491d1d-3087-4ff7-a6ca-199a4633578c",
    genreId: "5906376e-6a99-41a4-80c3-53c24eb3f297",
    name: "Библия. Книги Священного Писания Ветхого и Нового Завета",
    author: "",
    genre: "Религия",
    rating: "0",
    price: "2800",
    annotation:
      "Библия - священная книга христианской религии, запись Божиих откровений человеку, полученных в течение многих тысячелетий. Это книга божественных указаний. Она дает нам упокоение в горе, решение жизненных проблем, осуждение греха и духовную зрелость, так необходимую для преодоления наших забот.",
    reviews: [],
  },
  {
    id: "6355fae1-a9cf-4b43-9c26-c958bbb3a7c7",
    genreId: "5906376e-6a99-41a4-80c3-53c24eb3f297",
    name: "Библия. Книги Священного Писания Ветхого и Нового Завета",
    author: "",
    genre: "Религия",
    rating: "0",
    price: "2900",
    annotation:
      "Библия - священная книга христианской религии, запись Божиих откровений человеку, полученных в течение многих тысячелетий. Это книга божественных указаний. Она дает нам упокоение в горе, решение жизненных проблем, осуждение греха и духовную зрелость, так необходимую для преодоления наших забот.",
    reviews: [],
  },
  {
    id: "887c5fde-bded-47ff-ad6a-223ec4439508",
    genreId: "860b9a15-9d9a-4c2e-8c1a-cc28e1550f1c",
    name: "Годовой курс развития памяти у ребенка. 5-6 лет",
    author: "Светлана Карпова",
    genre: "Учебная литература",
    rating: "5",
    price: "350",
    annotation:
      'В книге "Годовой курс развития памяти у ребёнка. 5-6 лет" вы найдёте более 180 игр и заданий для тренировки произвольной, логической и опосредованной памяти у детей, а также комментариев родителям для совместных занятий всей семьёй. Наши главные герои - Ваня и Алиса - увлекаются музыкой и чтением, имеют разные характеры, но путешествовать любят вместе. Они всегда готовы превратить занятие в веселую игру!',
    reviews: [
      {
        id: "64dec096-3f44-43fb-98c1-7041372726c9",
        name: "Марина К.",
        text: "Взяла сразу две новинки Годового курса, так сказать, «на вырост», возраст вот-вот подойдет, а мы уже готовы ;) Издание такое же, как и другие книги серии, - большой формат с твердой обложкой, очень яркое, ребенку нравится рассматривать картинки. Текст крупный и его не слишком много, не утомляет. В «Развитии памяти» детям предлагаются разнообразные задания на запоминание – воспроизвести порядок, сказать, чего не хватает, повторить рисунок, найти отличия, выучить коротенький стишок (особенно полезно в преддверии школы). Традиционно есть дополнительные комментарии и задания для родителей, чтобы разнообразить представленные игры (нам они тоже очень нравятся, много творческих, есть подвижные). Рекомендую!",
        rating: "5",
      },
    ],
  },
  {
    id: "5f96fa47-6012-47a8-af86-505dc191d288",
    genreId: "860b9a15-9d9a-4c2e-8c1a-cc28e1550f1c",
    name: "Ментальные прописи. 3-4 года",
    author: "Вера Шаева",
    genre: "Учебная литература",
    rating: "0",
    price: "240",
    annotation:
      '"Ментальные прописи. 3-4 года" разработаны практикующим нейропсихологом как увлекательный досуг, призванный в естественной игровой форме помочь ребенку овладеть графомоторными навыками. Аккуратный почерк, ощущение границы листа и поддержание тонуса в мышцах рук - эти умения и навыки можно приобрести без изматывающих работ в первом классе.',
    reviews: [],
  },
  {
    id: "95e59895-93b1-4ccd-903d-834046bf6b4d",
    genreId: "c895063c-7027-4013-a4ea-89cefa782a6c",
    name: "Говори",
    author: "Лори Андерсон",
    genre: "Молодежная литература",
    rating: "0",
    price: "580",
    annotation:
      "Мелинда Сордино учится в старшей школе. У нее нет друзей, и она - изгой, потому что в конце прошлого учебного года позвонила в полицию и сорвала школьную вечеринку. Теперь никто не хочет не только общаться с Мелиндой, но и слушать ее. Долгое время она молчит о том, что произошло на самом деле. Однако благодаря работе над творческим проектом Мелинда находит в себе силы признать: ее изнасиловал старшеклассник, который до сих пор учится в ее школе.",
    reviews: [],
  },
  {
    id: "80ab636c-8678-4031-9c14-5836b92a6160",
    genreId: "c895063c-7027-4013-a4ea-89cefa782a6c",
    name: "Фехтовальщики. Том второй",
    author: "К. Пакат",
    genre: "Комиксы",
    rating: "3",
    price: "480",
    annotation:
      "Борьба за заветные места в сборной «Кингз Роу» продолжается, но Николас сомневается в успехе: ожесточенная конкуренция, недружелюбные старшекурсники и неуязвимый сосед по комнате, угрюмый Сэйдзи Катаяма, почти не оставляют ему шансов на победу. Чтобы выдержать такое испытание, Николасу придется преодолеть все свои потаенные страхи.",
    reviews: [
      {
        id: "c559acaa-1cfd-4d29-a1c5-8571b82ed856",
        name: "Лада М.",
        text: "Отличная порция удовольствия, но все равно мало! Хочу ещё!)))",
        rating: "3",
      },
    ],
  },
];

module.exports = {
  genre: normalizedBooks,
  book: normalizedBook,
};
