/* House of J&S · Inspire Computing International Year 6.
   Lesson order follows the supplied Pearson Year 6 Student Book contents.
   Myanmar teaching notes are original companion explanations, not Pearson translations. */
window.HJS_UNITS = [
  {
    "id": 1,
    "title": "Databases",
    "myTitle": "Database များ",
    "range": "Student Book Unit 1 · pp. 2–47",
    "accent": "blue",
    "overview": "Learn how information is stored in records and fields, how to create and query tables, how spreadsheets and DBMS software manage data, how databases are used in organisations, and how to research and evaluate online information.",
    "overviewMy": "အချက်အလက်များကို Record နှင့် Field များဖြင့် သိမ်းဆည်းပုံ၊ Data table ဖန်တီးပြီး Query လုပ်ပုံ၊ Spreadsheet နှင့် DBMS အသုံးပြုပုံ၊ အဖွဲ့အစည်းများတွင် Database သုံးပုံနှင့် Online research ကို ရှာဖွေသုံးသပ်ပုံတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how databases organise information into records, fields and tables.",
        "Database များသည် အချက်အလက်ကို Record၊ Field၊ Table များဖြင့် စီစဉ်ပုံကို ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Create a simple data table and use queries, filters and sorting.",
        "Data table တစ်ခုဖန်တီးပြီး Query၊ Filter၊ Sort တို့ကို အသုံးပြုနိုင်ရန်။"
      ],
      [
        "Compare spreadsheets and DBMS software, including keys and permissions.",
        "Spreadsheet နှင့် DBMS၊ Primary key နှင့် Permission များကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Use simple and advanced online searches effectively.",
        "Simple/Advanced online search များကို ထိရောက်စွာ အသုံးပြုနိုင်ရန်။"
      ],
      [
        "Compare research findings against criteria and evaluate the evidence.",
        "Research ရလဒ်များကို Criteria နှင့် နှိုင်းယှဉ်ပြီး Evidence ကို သုံးသပ်နိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Looking at ways to store information",
        "A database is an organised collection of information stored on a computer. Information is arranged in records. Each record describes one person, object or event, and each record is divided into fields. A class database might hold one record per student and fields such as Student ID, surname, first name, form tutor and date of birth. A paper list is possible, but computer databases make searching, sorting, updating and protecting information easier. Choose fields that are useful for the purpose and avoid collecting unnecessary personal details.",
        "Database ဆိုသည်မှာ ကွန်ပျူတာထဲတွင် စနစ်တကျ သိမ်းဆည်းထားသော Data စုစည်းမှုဖြစ်သည်။ Record တစ်ခုသည် ကျောင်းသားတစ်ဦး၊ ပစ္စည်းတစ်ခု သို့မဟုတ် ဖြစ်ရပ်တစ်ခုကို ဖော်ပြပြီး Field များဖြင့် ခွဲထားသည်။ ဥပမာ Class database တွင် ကျောင်းသားတစ်ဦးစီအတွက် Record တစ်ခုရှိပြီး Student ID၊ အမည်၊ Form tutor နှင့် မွေးသက္ကရာဇ်ကဲ့သို့ Field များပါဝင်နိုင်သည်။ ကွန်ပျူတာ Database ဖြင့် ရှာဖွေခြင်း၊ စီခြင်း၊ ပြင်ဆင်ခြင်းနှင့် အချက်အလက်ကာကွယ်ခြင်းတို့ ပိုမိုလွယ်ကူသည်။",
        "Identify the purpose → decide which fields are needed → create one record for each item → check that every value is stored in the correct field.",
        "ရည်ရွယ်ချက်သတ်မှတ်ပါ → လိုအပ်သော Field များရွေးပါ → အရာဝတ္ထုတစ်ခုစီအတွက် Record တစ်ခုဖန်တီးပါ → တန်ဖိုးများကို မှန်ကန်သော Field ထဲတွင် သိမ်းထားကြောင်း စစ်ပါ။"
      ],
      [
        "Creating a data table and running basic queries",
        "A data table organises records into rows and fields into columns. Each cell contains one value. A query is a question asked of the data, such as “Which animals have six legs?” A filter temporarily shows only records that meet a criterion. Sorting arranges records in ascending or descending order. When a table contains many records, filtering and sorting make patterns easier to find. A result depends on the quality and consistency of the information entered.",
        "Data table တွင် Row များက Record များကို ကိုယ်စားပြုပြီး Column များက Field များကို ကိုယ်စားပြုသည်။ Cell တစ်ခုတွင် တန်ဖိုးတစ်ခု ပါဝင်သည်။ Query သည် “ခြေထောက်ခြောက်ချောင်းရှိသည့် တိရစ္ဆာန်များက ဘာတွေလဲ” ကဲ့သို့ Data ကို မေးမြန်းခြင်းဖြစ်သည်။ Filter သည် သတ်မှတ်ချက်နှင့် ကိုက်ညီသော Record များကိုသာ ပြသပြီး Sort သည် အတက်/အဆင်း စီစဉ်ပေးသည်။ Data ထည့်သွင်းရာတွင် စံတူညီမှုရှိမှ ရလဒ်ကောင်း ရနိုင်သည်။",
        "Create column headings → enter one record per row → choose a query criterion → apply a filter → sort the visible records if needed.",
        "Column ခေါင်းစဉ်များဖန်တီးပါ → Row တစ်ကြောင်းစီတွင် Record တစ်ခုထည့်ပါ → Query စံနှုန်းရွေးပါ → Filter သုံးပါ → လိုအပ်ပါက ပြသထားသော Record များကို Sort လုပ်ပါ။"
      ],
      [
        "Using spreadsheet software to work with a single-table database",
        "A spreadsheet can hold a small database when it is formatted as a table with clear headings and consistent data. Data types include text, numbers, dates and alphanumeric codes. A filter narrows the displayed rows to chosen criteria. Sorting orders values, for example alphabetically by surname or numerically by height. Spreadsheet formatting such as borders, alignment and suitable number formats makes the table easier to read. A spreadsheet is useful for one table, but it does not provide every feature of a database management system.",
        "Spreadsheet ကို မှန်ကန်သော Table ပုံစံဖြင့် စီစဉ်ထားပါက Database အသေးစားအဖြစ် အသုံးပြုနိုင်သည်။ Data type များတွင် Text၊ Number၊ Date နှင့် အက္ခရာ/နံပါတ်ပေါင်းစပ်ထားသော Alphanumeric code ပါဝင်သည်။ Filter သည် စံနှုန်းကိုက်ညီသော Row များကိုသာ ပြသပြီး Sort သည် အမည်အလိုက် သို့မဟုတ် အရပ်အမြင့်အလိုက် စီပေးသည်။ Border၊ Alignment နှင့် Number format တို့က ဖတ်ရလွယ်စေသည်။ Spreadsheet သည် Table တစ်ခုအတွက် အသုံးဝင်သော်လည်း DBMS ၏ လုပ်ဆောင်ချက်အားလုံး မပါဝင်ပါ။",
        "Format the range as a table → verify the headings → set suitable data types → use Filter for criteria → use Sort to order records → save a clean copy.",
        "Range ကို Table အဖြစ် Format လုပ်ပါ → ခေါင်းစဉ်များစစ်ပါ → Data type မှန်ကန်စွာ သတ်မှတ်ပါ → စံနှုန်းရှာရန် Filter သုံးပါ → အစီအစဉ်ပြောင်းရန် Sort သုံးပါ → သန့်ရှင်းသော Copy တစ်ခု သိမ်းပါ။"
      ],
      [
        "Investigating the use of databases in school",
        "Schools use databases to manage student records, staff records, library books, library users, attendance and assessment results. Different people need different access. Students may be allowed to view their own results, teachers may view class results, and authorised administrators may maintain records. A database can be read-only for some users so important information cannot be changed accidentally. Access should follow the user’s role and the purpose of the information.",
        "ကျောင်းများတွင် Student record၊ Staff record၊ Library book၊ စာကြည့်တိုက်အသုံးပြုသူ၊ Attendance နှင့် Assessment result များကို Database ဖြင့် စီမံနိုင်သည်။ အသုံးပြုသူအမျိုးမျိုးတွင် Access level မတူသင့်ပါ။ ကျောင်းသားက ကိုယ်ပိုင်ရလဒ်ကိုသာ ကြည့်နိုင်ပြီး ဆရာက အတန်းရလဒ်များကို ကြည့်နိုင်သည်။ ခွင့်ပြုထားသော Admin က Record များကို စီမံနိုင်သည်။ အရေးကြီးသောအချက်အလက်ကို မတော်တဆ ပြင်မိခြင်းမှ ကာကွယ်ရန် Read-only သတ်မှတ်နိုင်သည်။",
        "List the school databases → identify each user role → decide what each role may view or edit → protect sensitive records → review permissions regularly.",
        "ကျောင်း Database များစာရင်းပြုစုပါ → အသုံးပြုသူ Role များသတ်မှတ်ပါ → ကြည့်ရှု/ပြင်ဆင်ခွင့်ကို ခွဲပါ → ကိုယ်ရေးအချက်အလက်ကို ကာကွယ်ပါ → Permission များကို ပုံမှန်ပြန်စစ်ပါ။"
      ],
      [
        "Investigating the use of databases outside school",
        "Businesses and organisations use databases to manage customers, products, stock, members, appointments and payments. A swimming pool may store membership number, name and payment status. It should not collect information that is irrelevant to membership. Personal or sensitive information such as medical, financial or bank details must be limited to an appropriate purpose and protected from unauthorised access. Good database design collects only the information that is genuinely needed.",
        "ကျောင်းပြင်ပလုပ်ငန်းများတွင် Customer၊ Product၊ Stock၊ Member၊ Appointment နှင့် ငွေပေးချေမှုတို့ကို Database ဖြင့် စီမံကြသည်။ ဥပမာ ရေကူးကန်အသင်းဝင်စာရင်းတွင် Member number၊ အမည်နှင့် Payment status ပါဝင်နိုင်သည်။ အသင်းဝင်မှုနှင့် မသက်ဆိုင်သော အချက်အလက်များကို မလိုအပ်ဘဲ မစုဆောင်းသင့်ပါ။ Medical၊ Financial နှင့် Bank details ကဲ့သို့ Sensitive data များကို ရည်ရွယ်ချက်မှန်ကန်စွာသာ သုံးပြီး ခွင့်မပြုသူများထံမှ ကာကွယ်ရမည်။",
        "Define the organisation’s task → identify essential fields → mark unnecessary fields → decide who may access each field → protect sensitive data.",
        "လုပ်ငန်း၏ လိုအပ်ချက်သတ်မှတ်ပါ → မရှိမဖြစ် Field များရွေးပါ → မလိုအပ်သော Field များဖယ်ပါ → Field တစ်ခုစီကို ဘယ်သူကြည့်နိုင်ကြောင်း သတ်မှတ်ပါ → Sensitive data ကာကွယ်ပါ။"
      ],
      [
        "Investigating database management systems",
        "A Database Management System (DBMS) is software used to create, search and manage databases. It can store different data types, run queries, link tables and set permissions for different users. A primary key is a field whose value uniquely identifies each record. It helps prevent confusion between records and can link related tables. Examples of field types include text, integer and date. A DBMS is more suitable than a simple spreadsheet when data is shared, related or needs carefully controlled access.",
        "Database Management System (DBMS) သည် Database များဖန်တီး၊ ရှာဖွေ၊ စီမံရန် အသုံးပြုသော Software ဖြစ်သည်။ Data type အမျိုးမျိုး သိမ်းနိုင်ပြီး Query လုပ်ခြင်း၊ Table များချိတ်ဆက်ခြင်းနှင့် User permission သတ်မှတ်ခြင်းတို့ လုပ်နိုင်သည်။ Primary key သည် Record တစ်ခုစီကို ထူးခြားစွာ ခွဲခြားပေးသော Field ဖြစ်သည်။ Text၊ Integer နှင့် Date ကဲ့သို့ Field type များရှိသည်။ Data များမျှဝေသုံးစွဲရသောအခါ DBMS သည် Spreadsheet ထက် ပိုသင့်တော်နိုင်သည်။",
        "Choose a unique identifier → assign suitable data types → create tables → define relationships → set user permissions → test a query.",
        "ထူးခြားသော ID ရွေးပါ → Data type သတ်မှတ်ပါ → Table များဖန်တီးပါ → Relationship ချိတ်ပါ → User Permission သတ်မှတ်ပါ → Query ကို စမ်းပါ။"
      ],
      [
        "Searching online databases",
        "An online database can be searched through a website or service. A simple search may look for a single word. Advanced search options narrow the results by date, language, website or words to include and exclude. Quotation marks search for an exact phrase. A plus sign can require terms to appear together in some search systems, and a wildcard such as an asterisk can stand for unknown characters. Check the source, date and author before trusting a result.",
        "Online Database ကို Website သို့မဟုတ် Service မှတစ်ဆင့် ရှာဖွေနိုင်သည်။ Simple search သည် စကားလုံးတစ်လုံးကို ရှာနိုင်ပြီး Advanced search တွင် Date၊ Language၊ Website နှင့် ထည့်/ဖယ်လိုသော Keyword များကို သတ်မှတ်နိုင်သည်။ Quotation mark သည် စကားစုအတိအကျရှာရန် သုံးသည်။ အချို့စနစ်တွင် Plus sign ဖြင့် စကားလုံးများကို ပေါင်းစပ်ရှာနိုင်ပြီး Asterisk က မသိသောအက္ခရာများကို ကိုယ်စားပြုနိုင်သည်။ ရလဒ်ကို ယုံကြည်မီ Source၊ Date နှင့် Author ကို စစ်ပါ။",
        "Write focused keywords → open advanced search → set date or site filters → use quotation marks for exact phrases → compare results from reliable sources.",
        "တိကျသော Keyword ရေးပါ → Advanced search ဖွင့်ပါ → Date သို့မဟုတ် Website filter သတ်မှတ်ပါ → စကားစုအတိအကျအတွက် Quotation mark သုံးပါ → ယုံကြည်ရသော Source များကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Carrying out an online research project · Part 1",
        "A research project begins with a brief and clear question. Identify the criteria that matter, find information from more than one source and record the evidence. For example, when comparing smart speakers, criteria could include voice control, rechargeable power, waterproofing, sub-woofer, colour choice and price. Advertising or paid-for search results may appear near the top, but they are not automatically the most suitable. Compare each product against the criteria rather than choosing from position alone.",
        "Research project တစ်ခုကို ရှင်းလင်းသော Brief နှင့် မေးခွန်းဖြင့် စတင်ရသည်။ အရေးကြီးသော Criteria များသတ်မှတ်ပြီး Source တစ်ခုထက်ပို၍ အချက်အလက်ရှာကာ Evidence မှတ်တမ်းတင်ပါ။ Smart speaker နှိုင်းယှဉ်ရာတွင် Voice control၊ Rechargeable၊ Waterproof၊ Sub-woofer၊ Colour နှင့် Price တို့ကို စံနှုန်းထားနိုင်သည်။ Search result အပေါ်ပိုင်းတွင် ကြော်ငြာပါနိုင်သော်လည်း အကောင်းဆုံးဟု မဆိုလိုပါ။ Criteria နှင့် တိုက်ဆိုင်စစ်ဆေးပြီးမှ ရွေးချယ်ပါ။",
        "Create a research question → list comparison criteria → collect sources and prices → enter evidence in a comparison table → identify the best match and explain why.",
        "Research question ဖန်တီးပါ → နှိုင်းယှဉ်မည့် Criteria စာရင်းလုပ်ပါ → Source နှင့် ဈေးနှုန်းစုဆောင်းပါ → Comparison table ထဲထည့်ပါ → အကိုက်ညီဆုံးကို အကြောင်းပြချက်ဖြင့် ရွေးပါ။"
      ],
      [
        "Carrying out an online research project · Part 2",
        "Compare the evidence collected from different sources. Enter the results in a table so each product can be checked against the same criteria. Mark whether each requirement is met and identify missing information. If a result is based on an advertisement or an opinion, do not treat it as confirmed fact. A fair comparison uses the same criteria for every option and explains uncertainty where evidence is incomplete.",
        "Source များမှ စုဆောင်းထားသော Evidence ကို နှိုင်းယှဉ်ပါ။ Product တစ်ခုစီကို Criteria တူညီစွာ စစ်နိုင်ရန် ရလဒ်များကို Table ထဲထည့်ပါ။ လိုအပ်ချက်ပြည့်မီ/မပြည့်မီ မှတ်ပြီး မပြည့်စုံသော အချက်အလက်ကို သတ်မှတ်ပါ။ ကြော်ငြာ သို့မဟုတ် ကိုယ်ပိုင်အမြင်အပေါ် အခြေခံသော ရလဒ်ကို အတည်ပြု Fact ဟု မယူဆပါနှင့်။ မျှတသောနှိုင်းယှဉ်မှုတွင် Option အားလုံးအတွက် Criteria တူညီစွာသုံးပြီး Evidence မပြည့်စုံပါက မသေချာမှုကို ဖော်ပြရမည်။",
        "Enter findings in a comparison table → mark each criterion → identify gaps → compare suitable options → prepare a recommendation.",
        "တွေ့ရှိချက်များကို Comparison table ထဲထည့်ပါ → Criteria တစ်ခုစီ မှတ်ပါ → မပြည့်စုံသောအချက်ရှာပါ → သင့်တော်သော Option များနှိုင်းယှဉ်ပါ → အကြံပြုချက်ပြင်ဆင်ပါ။"
      ],
      [
        "Reviewing research findings",
        "Reviewing findings means checking whether the results answer the original question and meet the criteria. A comparison table can show which products meet each requirement, which fail and which are suitable for more than one person. Use a consistent method to compare evidence. Check whether information is current, whether a claim is supported and whether the result is influenced by advertising. A good conclusion names the preferred option and gives evidence for the choice.",
        "Research finding ကို ပြန်လည်သုံးသပ်ခြင်းဆိုသည်မှာ ရလဒ်များက မူလမေးခွန်းနှင့် Criteria များကို ဖြည့်ဆည်းနိုင်ခြင်း ရှိ/မရှိ စစ်ဆေးခြင်းဖြစ်သည်။ Comparison table ဖြင့် ဘယ် Product က လိုအပ်ချက်ပြည့်မီသည်၊ မပြည့်မီသည်၊ လူနှစ်ဦးစလုံးအတွက် သင့်တော်သည်ကို ဖော်ပြနိုင်သည်။ အချက်အလက်အသစ်ဖြစ်/မဖြစ်၊ Claim ကို Evidence ဖြင့် ထောက်ခံထား/မထားနှင့် Advertising သက်ရောက်မှုကို စစ်ပါ။ နိဂုံးတွင် ရွေးချယ်ထားသော Product နှင့် အကြောင်းပြချက် ထည့်ပါ။",
        "Compare each option against every criterion → mark yes/no → identify suitable options → check evidence quality → write a conclusion with reasons.",
        "Option တစ်ခုစီကို Criterion တစ်ခုစီနှင့် နှိုင်းယှဉ်ပါ → Yes/No မှတ်ပါ → သင့်တော်သော Option များရွေးပါ → Evidence အရည်အသွေးစစ်ပါ → အကြောင်းပြချက်ပါသော နိဂုံးရေးပါ။"
      ]
    ],
    "terms": [
      [
        "Database",
        "An organised collection of related data stored on a computer.",
        "ကွန်ပျူတာတွင် စနစ်တကျ သိမ်းထားသော ဆက်စပ် Data စုစည်းမှု။"
      ],
      [
        "Data",
        "Raw facts or values before they are interpreted.",
        "အဓိပ္ပာယ်ဖော်ထုတ်ခြင်း မပြုရသေးသော မူလအချက်အလက်။"
      ],
      [
        "Information",
        "Data that has been organised or interpreted to be useful.",
        "စီစဉ်/အဓိပ္ပာယ်ဖော်ပြီး အသုံးဝင်လာသော Data။"
      ],
      [
        "Record",
        "One complete set of details about one item or person.",
        "ပစ္စည်း သို့မဟုတ် လူတစ်ဦးအကြောင်း အချက်အလက်အစုံ။"
      ],
      [
        "Field",
        "One category of information in a record.",
        "Record တစ်ခုအတွင်းရှိ အချက်အလက်အမျိုးအစားတစ်ခု။"
      ],
      [
        "Table",
        "A structure of rows and columns holding records and fields.",
        "Record နှင့် Field များကို Row/Column ဖြင့် စုစည်းထားသော ဇယား။"
      ],
      [
        "Row",
        "A horizontal line of cells, usually one record.",
        "Cell များ၏ အလျားလိုက်အတန်း၊ ပုံမှန်အားဖြင့် Record တစ်ခု။"
      ],
      [
        "Column",
        "A vertical set of values for one field.",
        "Field တစ်ခုအတွက် တန်ဖိုးများ၏ ဒေါင်လိုက်အစု။"
      ],
      [
        "Cell",
        "One box at the intersection of a row and column.",
        "Row နှင့် Column ဆုံရာ အကွက်တစ်ခု။"
      ],
      [
        "Database Management System (DBMS)",
        "Software used to create, search and manage databases.",
        "Database ဖန်တီး၊ ရှာဖွေ၊ စီမံရန် အသုံးပြုသော Software။"
      ],
      [
        "Query",
        "A request that asks a database to find particular data.",
        "Database မှ သတ်မှတ်ထားသော Data ကို ရှာပေးရန် မေးမြန်းချက်။"
      ],
      [
        "Filter",
        "A tool that shows only records matching selected criteria.",
        "သတ်မှတ်ချက်ကိုက်ညီသော Record များကိုသာ ပြသသော Tool။"
      ],
      [
        "Sort",
        "Arrange records into an order.",
        "Record များကို အစီအစဉ်တစ်ခုအတိုင်း စီခြင်း။"
      ],
      [
        "Ascending order",
        "An order from low to high or A to Z.",
        "နိမ့်မှမြင့် သို့မဟုတ် A မှ Z အစီအစဉ်။"
      ],
      [
        "Descending order",
        "An order from high to low or Z to A.",
        "မြင့်မှနိမ့် သို့မဟုတ် Z မှ A အစီအစဉ်။"
      ],
      [
        "Criterion",
        "One rule used to select records.",
        "Record ရွေးချယ်ရန် အသုံးပြုသော စံနှုန်းတစ်ခု။"
      ],
      [
        "Criteria",
        "The rules used to decide which records match.",
        "ကိုက်ညီသော Record ကို ဆုံးဖြတ်ရန် စံနှုန်းများ။"
      ],
      [
        "Primary key",
        "A field that uniquely identifies each record.",
        "Record တစ်ခုစီကို ထူးခြားစွာ ခွဲခြားပေးသော Field။"
      ],
      [
        "Unique value",
        "A value that is not repeated in the same key field.",
        "Key field တစ်ခုအတွင်း ထပ်မနေသော တန်ဖိုး။"
      ],
      [
        "Text data",
        "Letters, words or characters stored as text.",
        "စာလုံး၊ စကားလုံး သို့မဟုတ် အက္ခရာများကို Text အဖြစ် သိမ်းထားသော Data။"
      ],
      [
        "Number data",
        "A value stored for numerical use or calculation.",
        "တွက်ချက်မှုတွင် သုံးနိုင်သော ကိန်းဂဏန်း Data။"
      ],
      [
        "Date data",
        "A value representing a calendar date.",
        "ပြက္ခဒိန်ရက်စွဲကို ကိုယ်စားပြုသော Data။"
      ],
      [
        "Alphanumeric data",
        "A value containing both letters and numbers.",
        "အက္ခရာနှင့် နံပါတ် နှစ်မျိုးစလုံး ပါသော Data။"
      ],
      [
        "Spreadsheet",
        "Software that organises data in cells, rows and columns.",
        "Cell၊ Row၊ Column များဖြင့် Data စီစဉ်သော Software။"
      ],
      [
        "Read-only",
        "Permission that allows viewing but not changing data.",
        "ကြည့်ရှုခွင့်ရှိပြီး ပြင်ဆင်ခွင့်မရှိသော Permission။"
      ],
      [
        "Access permission",
        "A rule controlling who can view or edit information.",
        "အချက်အလက်ကို ဘယ်သူကြည့်/ပြင်နိုင်ကြောင်း ထိန်းချုပ်သော စည်းမျဉ်း။"
      ],
      [
        "Online database",
        "A database that can be accessed through a network or website.",
        "Network သို့မဟုတ် Website မှ ဝင်ရောက်အသုံးပြုနိုင်သော Database။"
      ],
      [
        "Simple search",
        "A basic search using a word or short phrase.",
        "စကားလုံး သို့မဟုတ် စကားစုတိုဖြင့် ရိုးရှင်းစွာ ရှာခြင်း။"
      ],
      [
        "Advanced search",
        "Search with extra options such as dates, language or site.",
        "ရက်စွဲ၊ ဘာသာစကား၊ Website စသည်ဖြင့် ရွေးချယ်မှုတိုးထားသော Search။"
      ],
      [
        "Keyword",
        "An important word used to search for information.",
        "အချက်အလက်ရှာဖွေရန် အသုံးပြုသော အဓိကစကားလုံး။"
      ],
      [
        "Exact phrase",
        "A group of words searched in the same order.",
        "အစီအစဉ်မပြောင်းဘဲ အတိအကျ ရှာသော စကားစု။"
      ],
      [
        "Wildcard",
        "A symbol standing for unknown or missing characters.",
        "မသိသော သို့မဟုတ် ပျောက်နေသော အက္ခရာများကို ကိုယ်စားပြုသော သင်္ကေတ။"
      ],
      [
        "Research brief",
        "A description of what a research task needs to find out.",
        "Research လုပ်ငန်းက ဘာကို ရှာဖွေရမည်ကို ဖော်ပြသော ညွှန်ကြားချက်။"
      ],
      [
        "Advertising result",
        "A paid placement that may appear in search results.",
        "ငွေပေးထားသောကြောင့် Search result တွင် ပြသနိုင်သည့် ကြော်ငြာ။"
      ],
      [
        "Evidence",
        "Information that supports a conclusion or decision.",
        "နိဂုံးချုပ် သို့မဟုတ် ဆုံးဖြတ်ချက်ကို ထောက်ခံသည့် အချက်အလက်။"
      ]
    ],
    "examples": [
      "A school stores one student record per pupil, with fields for name, form and date of birth.",
      "A library filters records to show books in a chosen category and sorts them by title.",
      "A swimming club collects only the member details it needs to manage membership.",
      "A product research table compares speakers against voice control, price and waterproofing."
    ],
    "examplesMy": [
      "ကျောင်းတွင် ကျောင်းသားတစ်ဦးစီအတွက် အမည်၊ အတန်း၊ မွေးသက္ကရာဇ် Field များပါသော Record တစ်ခုစီ သိမ်းသည်။",
      "စာကြည့်တိုက်သည် သတ်မှတ်ထားသော အမျိုးအစားရှိ စာအုပ်များကို Filter လုပ်ပြီး ခေါင်းစဉ်အလိုက် Sort လုပ်သည်။",
      "ရေကူးကလပ်သည် အသင်းဝင်မှုစီမံရန် လိုအပ်သော အချက်အလက်များကိုသာ စုဆောင်းသည်။",
      "Product research table တွင် Speaker များကို Voice control၊ ဈေးနှုန်း၊ ရေစိုခံမှုတို့နှင့် နှိုင်းယှဉ်သည်။"
    ],
    "table": {
      "caption": "Example class database · sample fields",
      "headers": [
        "Student ID",
        "Surname",
        "First name",
        "Form",
        "Date of birth"
      ],
      "rows": [
        [
          "1001",
          "Chung",
          "Conrad",
          "18A",
          "01/10/2014"
        ],
        [
          "1002",
          "Fischer",
          "Heidi",
          "18A",
          "15/11/2014"
        ],
        [
          "1003",
          "Freund",
          "Linda",
          "7",
          "12/07/2015"
        ],
        [
          "1004",
          "Gallia",
          "Harriet",
          "7",
          "22/02/2015"
        ]
      ]
    },
    "activities": [
      [
        "Design a class record",
        "Choose six useful fields for a fictional class database. Explain why each field is needed.",
        "စိတ်ကူးယဉ်အတန်း Database အတွက် အသုံးဝင်သော Field ခြောက်ခုရွေးပြီး ဘာကြောင့်လိုကြောင်း ရှင်းပြပါ။"
      ],
      [
        "Animal query table",
        "Create a table of animals and use filters to find which can fly, have six legs or live on land.",
        "တိရစ္ဆာန် Table ဖန်တီးပြီး ပျံနိုင်ခြင်း၊ ခြေထောက်ခြောက်ချောင်းရှိခြင်း၊ ကုန်းပေါ်နေခြင်းတို့ကို Filter လုပ်ရှာပါ။"
      ],
      [
        "School access matrix",
        "Decide which users should view or edit library, assessment and staff records.",
        "Library၊ Assessment၊ Staff record များကို ဘယ်သူကြည့်/ပြင်နိုင်သင့်သည် ဆုံးဖြတ်ပါ။"
      ],
      [
        "Search challenge",
        "Find three reliable sources about a chosen topic using a date or website filter.",
        "ရွေးထားသောအကြောင်းအရာအတွက် Date သို့မဟုတ် Website filter သုံးပြီး ယုံကြည်ရသော Source သုံးခုရှာပါ။"
      ],
      [
        "Product comparison",
        "Compare three devices using a criteria table and write a reasoned recommendation.",
        "Device သုံးခုကို Criteria table ဖြင့် နှိုင်းယှဉ်ပြီး အကြောင်းပြချက်ပါသော အကြံပြုချက်ရေးပါ။"
      ]
    ],
    "slides": [
      "What is a database?",
      "Records, fields and tables",
      "Data types and table design",
      "Queries, filters and sorting",
      "Spreadsheets and DBMS",
      "Primary keys and permissions",
      "Advanced online search",
      "Research criteria and evidence",
      "Product comparison table",
      "Review and conclusion"
    ],
    "essays": [
      [
        "Explain the difference between a record, a field and a database. Give a school example.",
        "A record is one complete set of information about one student. A field is one category such as surname or date of birth. A database is the whole collection of records. A school database may contain one record for each student and fields for Student ID, name and form.",
        [
          "record",
          "field",
          "database",
          "student",
          "information"
        ]
      ],
      [
        "Describe two advantages of using a DBMS rather than a simple spreadsheet in a school.",
        "A DBMS can link related tables or databases and can set access permissions for different users. This helps staff share related information while restricting sensitive records to authorised users.",
        [
          "link",
          "tables",
          "permissions",
          "users",
          "sensitive"
        ]
      ],
      [
        "Explain how advanced search tools can improve an online research task.",
        "Advanced search can limit results by date, language or website, include or exclude keywords, and search for an exact phrase. These options narrow the results so the researcher can find more relevant information.",
        [
          "date",
          "language",
          "website",
          "keywords",
          "phrase"
        ]
      ],
      [
        "A class needs to choose a product using five criteria. Explain how a comparison table helps make a fair choice.",
        "List the criteria as columns and each product as a row. Record evidence for each product, mark which requirements are met, check the price and choose the product that best matches the most important criteria. Explain the decision using the recorded evidence.",
        [
          "criteria",
          "table",
          "evidence",
          "compare",
          "decision"
        ]
      ]
    ]
  },
  {
    "id": 2,
    "title": "Programming (part 1)",
    "myTitle": "Programming (အပိုင်း ၁)",
    "range": "Student Book Unit 2 · pp. 48–93",
    "accent": "gold",
    "overview": "Develop algorithms using sequence, selection and iteration; create a game with loops, sprites, events and interactions; use variables for a scoreboard; debug and test the game through alpha and beta testing.",
    "overviewMy": "Sequence၊ Selection၊ Iteration တို့သုံး၍ Algorithm များရေးသားခြင်း၊ Loop၊ Sprite၊ Event နှင့် Interaction များပါသော Game ဖန်တီးခြင်း၊ Scoreboard အတွက် Variable အသုံးပြုခြင်း၊ Debugging နှင့် Alpha/Beta testing ပြုလုပ်ခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Write clear algorithms to solve everyday and game problems.",
        "နေ့စဉ်ဘဝနှင့် Game ပြဿနာများကို ဖြေရှင်းရန် Algorithm ရှင်းလင်းစွာ ရေးနိုင်ရန်။"
      ],
      [
        "Use sequence, selection and iteration in a visual program.",
        "Visual Program တွင် Sequence၊ Selection၊ Iteration အသုံးပြုနိုင်ရန်။"
      ],
      [
        "Use sprites, events, loops and conditions to create interaction.",
        "Sprite၊ Event၊ Loop၊ Condition တို့ဖြင့် Interaction ဖန်တီးနိုင်ရန်။"
      ],
      [
        "Use variables to store and update a game score.",
        "Game Score သိမ်းဆည်း/ပြောင်းလဲရန် Variable အသုံးပြုနိုင်ရန်။"
      ],
      [
        "Debug, alpha test, beta test and review a game.",
        "Game ကို Debug၊ Alpha test၊ Beta test နှင့် Review ပြုလုပ်နိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Introduction to writing algorithms",
        "An algorithm is a precise set of instructions for completing a task. The instructions need to be in a sensible sequence so the person or device can follow them. Everyday examples include brushing teeth or making a drink. If a step is missing or placed in the wrong order, the result may be incorrect. Debugging means checking an algorithm for errors and correcting them. A good algorithm is clear, complete and does not rely on the reader guessing what to do.",
        "Algorithm ဆိုသည်မှာ လုပ်ငန်းတစ်ခုကို ဆောင်ရွက်ရန် တိကျသော ညွှန်ကြားချက်အစုဖြစ်သည်။ ညွှန်ကြားချက်များကို လိုက်နာသူ သို့မဟုတ် Device က နားလည်နိုင်သော အစီအစဉ်ဖြင့် ရေးရမည်။ သွားတိုက်ခြင်း၊ လက်ဖက်ရည်ဖျော်ခြင်းတို့သည် နေ့စဉ်ဘဝ Algorithm ဥပမာများဖြစ်သည်။ အဆင့်တစ်ခု ပျောက်နေခြင်း သို့မဟုတ် အစီအစဉ်မှားခြင်းက ရလဒ်မှားစေနိုင်သည်။ Debugging သည် အမှားရှာပြီး ပြင်ဆင်ခြင်းဖြစ်သည်။",
        "Define the goal → list every required action → put the actions in order → test the instructions with another person → correct unclear or missing steps.",
        "ရည်ရွယ်ချက်သတ်မှတ်ပါ → လိုအပ်သော လုပ်ဆောင်ချက်အားလုံး စာရင်းပြုစုပါ → အစီအစဉ်တကျ စီပါ → အခြားသူတစ်ဦးနှင့် စမ်းသပ်ပါ → မရှင်းလင်း/ပျောက်နေသော အဆင့်များ ပြင်ပါ။"
      ],
      [
        "Creating an algorithm using loops",
        "A loop repeats a group of instructions. It makes an algorithm shorter and reduces repeated lines. For example, a robot may move forward several times or a person may paint several identical fence panels. A REPEAT loop runs a set number of times. A REPEAT UNTIL loop continues until a condition becomes true. Loops must contain the correct actions and the correct number of repetitions; a wrong repeat count can produce a wrong route or incomplete task.",
        "Loop သည် ညွှန်ကြားချက်အစုတစ်ခုကို ထပ်ခါတလဲလဲ လုပ်ဆောင်ပေးသည်။ ထပ်ရေးရမည့် စာကြောင်းများကို လျှော့ချနိုင်သည်။ Robot တစ်ခုက ရှေ့သို့ အကြိမ်များစွာ သွားခြင်း သို့မဟုတ် ခြံစည်းရိုးပြားများကို ထပ်ခါတလဲလဲ ဆေးသုတ်ခြင်း ဥပမာဖြစ်သည်။ REPEAT သည် သတ်မှတ်အကြိမ်ရေ လုပ်ပြီး REPEAT UNTIL သည် သတ်မှတ်ချက်မှန်သည့်အထိ ဆက်လုပ်သည်။",
        "Identify the repeated action → decide whether the count is fixed or condition-based → place the actions inside the loop → test the route or result.",
        "ထပ်လုပ်ရမည့် လုပ်ဆောင်ချက်ကို ရှာပါ → အကြိမ်ရေသတ်မှတ်ထားသလား၊ Condition အပေါ်မူတည်သလား ဆုံးဖြတ်ပါ → Loop ထဲတွင် ညွှန်ကြားချက်များ ထည့်ပါ → ရလဒ်ကို စမ်းပါ။"
      ],
      [
        "Programming a solution to a problem that contains loops · Part 1",
        "A robot route can be represented with simple commands such as Forward, Left and Right. A route on a grid is easier to describe when repeated movement is grouped into a loop. Before programming, check the start position, direction, destination and obstacles. The route should be traced one step at a time. If the robot finishes at the wrong square, inspect the loop count and the turn instructions.",
        "Grid ပေါ်တွင် Robot လမ်းကြောင်းကို Forward၊ Left၊ Right ကဲ့သို့ Command များဖြင့် ဖော်ပြနိုင်သည်။ ထပ်နေသော လှုပ်ရှားမှုများကို Loop အဖြစ် စုစည်းပါက လမ်းကြောင်းကို ရေးရလွယ်ကူသည်။ Program မရေးမီ Start position၊ မျက်နှာမူရာ၊ Destination နှင့် အတားအဆီးများကို စစ်ပါ။ Robot သည် နေရာမှားရောက်ပါက Loop အကြိမ်ရေနှင့် Turn command များကို ပြန်စစ်ပါ။",
        "Mark the start and goal on a grid → write the moves → replace repeated moves with loops → trace the route → fix incorrect turns or counts.",
        "Grid ပေါ်တွင် Start နှင့် Goal မှတ်ပါ → လှုပ်ရှားမှုများရေးပါ → ထပ်နေသော လှုပ်ရှားမှုကို Loop ပြောင်းပါ → လမ်းကြောင်းလိုက်စစ်ပါ → Turn သို့မဟုတ် Count မှားလျှင် ပြင်ပါ။"
      ],
      [
        "Programming a solution to a problem that contains loops · Part 2",
        "In a visual programming language, loop blocks hold other blocks inside them. The position or indentation of a block matters because it determines which actions repeat. Nested loops place one loop inside another; this is useful for drawing grids or repeated patterns. A loop can be tested by stepping through each repetition and comparing the robot or sprite position with the planned route.",
        "Visual programming language တွင် Loop block ထဲ၌ အခြား Block များ ထည့်ထားနိုင်သည်။ Block တည်နေရာနှင့် Indentation သည် ဘယ်လုပ်ဆောင်ချက်များ ထပ်လုပ်မည်ကို သတ်မှတ်ပေးသည်။ Loop တစ်ခုအတွင်း Loop တစ်ခု ထပ်ထည့်ခြင်းကို Nested loop ဟုခေါ်ပြီး Grid သို့မဟုတ် Pattern များဆွဲရာတွင် အသုံးဝင်သည်။",
        "Place repeated commands inside the loop → check the block nesting → predict the number of moves → run the program → compare the actual route with the plan.",
        "ထပ်လုပ်ရမည့် Command များကို Loop ထဲထည့်ပါ → Block အတွင်းစီထားပုံစစ်ပါ → လှုပ်ရှားမှုအရေအတွက် ခန့်မှန်းပါ → Program run ပါ → အမှန်တကယ်လမ်းကြောင်းနှင့် Plan နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Creating a Frogger-style game",
        "A Frogger-style game asks a player to move a character across a play area while avoiding moving obstacles. A game plan identifies the player sprite, obstacle sprites, backdrop, controls, safe areas and win or lose conditions. The game should respond to the player’s key presses and give clear feedback. Split the problem into manageable parts: create the scene, add the player, add obstacles, programme movement and test collisions.",
        "Frogger ပုံစံ Game တွင် ကစားသူသည် ရွေ့လျားနေသော အတားအဆီးများကို ရှောင်ပြီး Character ကို ကစားကွင်းတစ်ဖက်သို့ ရွှေ့ရသည်။ Game plan တွင် Player sprite၊ Obstacle sprite၊ Backdrop၊ Control key၊ Safe area နှင့် Win/Lose condition များ ပါဝင်ရမည်။ Scene ဖန်တီးခြင်း၊ Player ထည့်ခြင်း၊ Obstacle ထည့်ခြင်း၊ Movement ရေးခြင်း၊ Collision စမ်းခြင်းဟူ၍ အပိုင်းခွဲလုပ်ပါ။",
        "Sketch the game area → create the player and obstacle sprites → choose controls → programme movement and collision rules → test each part.",
        "Game area ပုံကြမ်းဆွဲပါ → Player နှင့် Obstacle sprite ဖန်တီးပါ → Control သတ်မှတ်ပါ → Movement နှင့် Collision rule ရေးပါ → အပိုင်းလိုက် စမ်းသပ်ပါ။"
      ],
      [
        "Creating movement of game objects, including forever loops",
        "A sprite can move repeatedly by placing movement commands inside a forever loop. Events such as the green flag start the program. A sprite may move across the stage, return to a starting point or respond to a key. The forever loop keeps repeating while the game is running, so it should include a sensible movement and any boundary handling. Without a boundary rule, a sprite may disappear off the stage.",
        "Sprite တစ်ခုသည် Movement command များကို Forever loop ထဲထည့်ထားခြင်းဖြင့် ထပ်ခါတလဲလဲ ရွေ့လျားနိုင်သည်။ Green flag ကဲ့သို့ Event ဖြင့် Program စတင်နိုင်သည်။ Sprite သည် Stage ကို ဖြတ်ရွေ့နိုင်ပြီး Start point သို့ ပြန်လာနိုင်သလို Key နှိပ်ခြင်းကိုလည်း တုံ့ပြန်နိုင်သည်။ Forever loop အတွင်း Boundary rule မပါလျှင် Sprite သည် Stage အပြင်သို့ ပျောက်သွားနိုင်သည်။",
        "Choose a start event → add a forever loop → add movement → add edge or reset behaviour → test for unexpected movement.",
        "Start event ရွေးပါ → Forever loop ထည့်ပါ → Movement command ထည့်ပါ → Edge/Reset လုပ်ဆောင်ချက် ထည့်ပါ → မမျှော်လင့်သော ရွေ့လျားမှုရှိ/မရှိ စမ်းပါ။"
      ],
      [
        "Using IF…THEN… in a game to add interaction",
        "Selection allows a program to choose an action when a condition is met. An IF…THEN block can check whether a sprite touches an obstacle, whether a key is pressed or whether the player reaches a target. If the condition is true, the blocks inside THEN run. A game may show a message, move the player back or reduce a score. Test both the true and false situations so the game behaves correctly in either case.",
        "Selection သည် Condition တစ်ခု ပြည့်မီလျှင် ဘာလုပ်မည်ကို Program က ရွေးချယ်စေသည်။ IF…THEN block သည် Sprite တစ်ခုက Obstacle ထိ/မထိ၊ Key နှိပ်/မနှိပ်၊ Goal ရောက်/မရောက် စစ်နိုင်သည်။ Condition မှန်လျှင် THEN အတွင်း Block များ အလုပ်လုပ်သည်။ Game တွင် Message ပြခြင်း၊ Player ကို ပြန်ရွှေ့ခြင်း သို့မဟုတ် Score လျှော့ခြင်းတို့ လုပ်နိုင်သည်။ True နှင့် False အခြေအနေ နှစ်မျိုးစလုံး စမ်းပါ။",
        "Choose a condition → place the response inside THEN → add an alternative if needed → test when the condition is true and false.",
        "Condition ရွေးပါ → တုံ့ပြန်မည့် Block များကို THEN ထဲထည့်ပါ → လိုအပ်ပါက Alternative ထည့်ပါ → Condition မှန်/မမှန် နှစ်မျိုးစလုံး စမ်းပါ။"
      ],
      [
        "Using a variable to create a scoreboard",
        "A variable is a named place to store a value. A game can use a score variable to count points, lives or time. Set the variable to its starting value when a new game begins. Change it when the player collects an item or loses a life. Resetting the variable prevents the previous game’s score being carried into the next game. Display the variable on the stage so the player can see the result.",
        "Variable သည် တန်ဖိုးတစ်ခုကို သိမ်းဆည်းရန် အမည်ပေးထားသော နေရာဖြစ်သည်။ Game တွင် Score၊ Life သို့မဟုတ် Time ကို ရေတွက်နိုင်သည်။ Game အသစ်စတင်ချိန် Variable ကို စတင်တန်ဖိုး သတ်မှတ်ပါ။ Item ကောက်ရလျှင် တိုးပြီး Life ဆုံးရှုံးလျှင် လျှော့ပါ။ Game အသစ်မစမီ Reset မလုပ်ပါက ယခင် Score ဆက်ကျန်နေနိုင်သည်။ Stage ပေါ်တွင် ပြသထားပါ။",
        "Create a score variable → set it to zero at game start → change it after game events → display it → reset and retest.",
        "Score variable ဖန်တီးပါ → Game စချိန် သုညသတ်မှတ်ပါ → Event ဖြစ်တိုင်း တိုး/လျှော့ပါ → Display လုပ်ပါ → Reset လုပ်ပြီး စမ်းပါ။"
      ],
      [
        "Alpha and beta testing a game",
        "Alpha testing is carried out by the programmer or close colleagues while the game is still being developed. Beta testing is carried out by people outside the original development group, such as potential players. A test plan lists what should happen, what actually happens and what action is needed if a problem occurs. Test different controls, levels, scores, collision events and restart behaviour. Feedback from testers can reveal problems that the programmer did not notice.",
        "Alpha testing ကို Program ရေးသူ သို့မဟုတ် အနီးကပ်အဖွဲ့ဝင်များက Game ဖွံ့ဖြိုးနေစဉ် စမ်းသပ်သည်။ Beta testing ကို မူလဖန်တီးသူအဖွဲ့ပြင်ပရှိ အနာဂတ်ကစားသူများက စမ်းသပ်သည်။ Test plan တွင် မျှော်မှန်းရလဒ်၊ အမှန်တကယ်ရလဒ်နှင့် ပြဿနာဖြစ်လျှင် လုပ်ဆောင်မည့်အရာကို မှတ်တမ်းတင်သည်။ Control၊ Level၊ Score၊ Collision နှင့် Restart များ စမ်းပါ။",
        "Write test cases → run alpha tests → correct faults → invite beta testers → record feedback → update and retest the game.",
        "Test case များရေးပါ → Alpha test လုပ်ပါ → Error ပြင်ပါ → Beta tester များခေါ်ပါ → Feedback မှတ်ပါ → Game ပြင်ပြီး ပြန်စမ်းပါ။"
      ],
      [
        "Completing a game and reviewing your learning",
        "A finished game should have a clear objective, instructions, working controls, suitable difficulty, score or feedback and a reliable way to restart. Before sharing it, check that the program works from the start, that sprites behave as intended and that messages are understandable. A review describes what worked well, what needs improvement and what changes were made after testing. Keep a record of known issues rather than claiming the game is perfect.",
        "ပြီးစီးသော Game တွင် ရှင်းလင်းသော ရည်မှန်းချက်၊ ညွှန်ကြားချက်၊ အလုပ်လုပ်သော Control၊ သင့်တော်သော Difficulty၊ Score/Feedback နှင့် Restart လမ်းကြောင်း ရှိသင့်သည်။ မျှဝေမီ Program စတင်ချိန်မှ အလုပ်လုပ်မှု၊ Sprite များ၏ လှုပ်ရှားမှုနှင့် Message များကို စစ်ပါ။ Review တွင် ကောင်းမွန်သောအချက်၊ တိုးတက်ရန်အချက်နှင့် Test ပြီးနောက် ပြောင်းလဲခဲ့သည့်အရာများ ဖော်ပြပါ။",
        "Run the complete game → follow the instructions as a new player → test win/lose/restart → collect feedback → write a balanced review.",
        "Game တစ်ခုလုံး Run ပါ → ကစားသူအသစ်လို ညွှန်ကြားချက်လိုက်နာပါ → Win/Lose/Restart စမ်းပါ → Feedback စုပါ → မျှတသော Review ရေးပါ။"
      ]
    ],
    "terms": [
      [
        "Algorithm",
        "A precise sequence of instructions for a task.",
        "လုပ်ငန်းတစ်ခုအတွက် တိကျသော ညွှန်ကြားချက်အစီအစဉ်။"
      ],
      [
        "Instruction",
        "A single command telling a person or computer what to do.",
        "လူ သို့မဟုတ် ကွန်ပျူတာကို ဘာလုပ်ရမည် ပြောသည့် Command တစ်ခု။"
      ],
      [
        "Sequence",
        "Instructions carried out in a particular order.",
        "သတ်မှတ်ထားသော အစီအစဉ်အတိုင်း လုပ်ဆောင်ခြင်း။"
      ],
      [
        "Selection",
        "Choosing actions according to a condition.",
        "Condition အပေါ်မူတည်၍ လုပ်ဆောင်ချက် ရွေးချယ်ခြင်း။"
      ],
      [
        "Iteration",
        "Repeating an action or group of actions.",
        "လုပ်ဆောင်ချက်တစ်ခု သို့မဟုတ် အစုတစ်ခုကို ထပ်လုပ်ခြင်း။"
      ],
      [
        "Loop",
        "A programming structure that repeats commands.",
        "Command များကို ထပ်ခါတလဲလဲ လုပ်ဆောင်သော Programming structure။"
      ],
      [
        "REPEAT",
        "A loop that repeats a fixed number of times.",
        "သတ်မှတ်ထားသော အကြိမ်ရေ အတိုင်း ထပ်လုပ်သော Loop။"
      ],
      [
        "REPEAT UNTIL",
        "A loop that continues until a condition is true.",
        "Condition မှန်သည်အထိ ဆက်လက်ထပ်လုပ်သော Loop။"
      ],
      [
        "Debug",
        "Find and correct errors in an algorithm or program.",
        "Algorithm/Program ထဲရှိ အမှားများကို ရှာဖွေပြင်ဆင်ခြင်း။"
      ],
      [
        "Bug",
        "An error that makes a program behave incorrectly.",
        "Program ကို မမှန်ကန်စွာ အလုပ်လုပ်စေသော အမှား။"
      ],
      [
        "Decomposition",
        "Breaking a large problem into smaller parts.",
        "ပြဿနာကြီးတစ်ခုကို အပိုင်းငယ်များ ခွဲခြင်း။"
      ],
      [
        "Pseudocode",
        "A plain-language way to plan program instructions.",
        "Program ညွှန်ကြားချက်ကို ရိုးရှင်းသော စကားဖြင့် ကြိုတင်ရေးသားခြင်း။"
      ],
      [
        "Program",
        "Instructions written for a computer to perform a task.",
        "ကွန်ပျူတာကို လုပ်ငန်းတစ်ခု ဆောင်ရွက်စေသော Instruction အစု။"
      ],
      [
        "Scratch",
        "A visual programming environment using code blocks.",
        "Code block များကို ဆွဲချိတ်အသုံးပြုသော Visual programming environment။"
      ],
      [
        "Block",
        "A visual instruction used in Scratch.",
        "Scratch တွင် အသုံးပြုသော မြင်သာသည့် Instruction အကွက်။"
      ],
      [
        "Sprite",
        "A character or object that acts on the Scratch stage.",
        "Scratch Stage ပေါ်တွင် လုပ်ဆောင်သော Character/Object။"
      ],
      [
        "Stage",
        "The area where Scratch sprites appear and move.",
        "Scratch Sprite များ ပေါ်လာ/ရွေ့လျားသော ဧရိယာ။"
      ],
      [
        "Backdrop",
        "The background image of a Scratch stage.",
        "Scratch Stage ၏ နောက်ခံပုံ။"
      ],
      [
        "Event",
        "An action that starts or triggers a script.",
        "Script ကို စတင်စေသော သို့မဟုတ် လုပ်ဆောင်စေသော ဖြစ်ရပ်။"
      ],
      [
        "Green flag",
        "A Scratch event block used to start a project.",
        "Scratch Project စတင်ရန် အသုံးပြုသော အစိမ်းရောင်အလံ Event။"
      ],
      [
        "Motion",
        "Scratch blocks that move or turn a sprite.",
        "Sprite ကို ရွှေ့/လှည့်စေသော Scratch Block အမျိုးအစား။"
      ],
      [
        "Looks",
        "Scratch blocks that change a sprite’s appearance or speech.",
        "Sprite ၏ ပုံစံ သို့မဟုတ် စကားပြောပုံကို ပြောင်းသော Block များ။"
      ],
      [
        "Forever loop",
        "A loop that repeats while the script is running.",
        "Script လုပ်ဆောင်နေသမျှ ထပ်လုပ်နေသော Loop။"
      ],
      [
        "Condition",
        "A statement or test that can be true or false.",
        "True သို့မဟုတ် False ဖြစ်နိုင်သော စမ်းသပ်ချက်။"
      ],
      [
        "IF…THEN",
        "A selection block that runs commands when a condition is true.",
        "Condition မှန်လျှင် Command များကို လုပ်ဆောင်စေသော Selection block။"
      ],
      [
        "Variable",
        "A named place to store a value.",
        "တန်ဖိုးတစ်ခု သိမ်းရန် အမည်ပေးထားသော နေရာ။"
      ],
      [
        "Score",
        "A value used to record a player’s points.",
        "ကစားသူ၏ အမှတ်များကို မှတ်တမ်းတင်သော တန်ဖိုး။"
      ],
      [
        "Collision",
        "When two sprites or objects touch or overlap.",
        "Sprite/Object နှစ်ခု ထိတွေ့ သို့မဟုတ် ထပ်နေခြင်း။"
      ],
      [
        "Alpha testing",
        "Testing performed by developers or close colleagues.",
        "ဖန်တီးသူ သို့မဟုတ် အနီးကပ်အဖွဲ့က စမ်းသပ်ခြင်း။"
      ],
      [
        "Beta testing",
        "Testing by people outside the development team.",
        "ဖန်တီးသူအဖွဲ့ပြင်ပရှိ အသုံးပြုသူများက စမ်းသပ်ခြင်း။"
      ],
      [
        "Test plan",
        "A list of test inputs, expected results and actual results.",
        "စမ်းသပ်မည့် Input၊ မျှော်မှန်းရလဒ်နှင့် အမှန်ရလဒ် စာရင်း။"
      ],
      [
        "Sprite costume",
        "An appearance or pose that can be selected for a sprite.",
        "Sprite အတွက် ရွေးချယ်နိုင်သော ပုံစံ/အနေအထား။"
      ],
      [
        "Obstacle",
        "An object that blocks or challenges the player.",
        "ကစားသူ၏ လမ်းကြောင်းကို တားဆီး/စိန်ခေါ်သော အရာ။"
      ],
      [
        "Scoreboard",
        "A display showing points or game progress.",
        "အမှတ် သို့မဟုတ် Game တိုးတက်မှုကို ပြသသော ဇယား။"
      ],
      [
        "Feedback",
        "Information shown to a player about an action or result.",
        "လုပ်ဆောင်ချက် သို့မဟုတ် ရလဒ်အကြောင်း ကစားသူကို ပြသသော အချက်အလက်။"
      ]
    ],
    "examples": [
      "A repeated robot route can be shortened with a REPEAT loop.",
      "A game checks whether a sprite touches an obstacle and then resets the player.",
      "A score variable starts at zero and increases when a player collects an item.",
      "A beta tester plays the game and reports unclear controls or unexpected behaviour."
    ],
    "examplesMy": [
      "Robot လမ်းကြောင်းတွင် ထပ်ခါတလဲလဲ လုပ်ဆောင်မှုကို REPEAT loop ဖြင့် ရေးနိုင်သည်။",
      "Game သည် Sprite တစ်ခုက Obstacle ကို ထိ/မထိ စစ်ပြီး Player ကို Reset လုပ်နိုင်သည်။",
      "Score variable သည် သုညမှစပြီး Player က Item ကောက်သောအခါ တိုးသည်။",
      "Beta tester သည် Game ကစားပြီး Control မရှင်းလင်းခြင်း သို့မဟုတ် မမျှော်လင့်သော လုပ်ဆောင်မှုကို Report လုပ်သည်။"
    ],
    "table": {
      "caption": "Game planning · key components",
      "headers": [
        "Component",
        "Purpose",
        "Example"
      ],
      "rows": [
        [
          "Player sprite",
          "Controlled by player",
          "Frog / character"
        ],
        [
          "Obstacle sprite",
          "Creates challenge",
          "Car / moving object"
        ],
        [
          "Event",
          "Starts script",
          "Green flag"
        ],
        [
          "Condition",
          "Checks a situation",
          "Touching obstacle?"
        ],
        [
          "Variable",
          "Stores progress",
          "score"
        ],
        [
          "Loop",
          "Repeats movement",
          "Forever / Repeat 5"
        ]
      ]
    },
    "activities": [
      [
        "Tea-making algorithm",
        "Write instructions in order and ask a partner to follow them exactly.",
        "လက်ဖက်ရည်ဖျော်ရန် Instruction များကို အစီအစဉ်တကျရေးပြီး မိတ်ဆွေတစ်ဦးအား အတိအကျ လိုက်လုပ်ခိုင်းပါ။"
      ],
      [
        "Robot grid route",
        "Draw a 5×5 grid, mark a start and goal, and create a loop-based route.",
        "5×5 Grid ဆွဲပြီး Start/Goal သတ်မှတ်ကာ Loop ပါသော လမ်းကြောင်းဖန်တီးပါ။"
      ],
      [
        "Frogger mini-game",
        "Create a player sprite, one obstacle and a collision response.",
        "Player sprite၊ Obstacle တစ်ခုနှင့် Collision တုံ့ပြန်မှု ပါသော Mini-game ဖန်တီးပါ။"
      ],
      [
        "Scoreboard test",
        "Make a score variable and test increase, decrease and reset actions.",
        "Score variable ဖန်တီးပြီး တိုးခြင်း၊ လျှော့ခြင်း၊ Reset လုပ်ခြင်း စမ်းပါ။"
      ],
      [
        "Peer testing",
        "Prepare a short test plan and ask a classmate to test the project.",
        "Test plan တိုတောင်းတစ်ခု ပြုလုပ်ပြီး အတန်းဖော်တစ်ဦးကို Project စမ်းသပ်ခိုင်းပါ။"
      ]
    ],
    "slides": [
      "What is an algorithm?",
      "Sequence, selection and iteration",
      "Loops and robot routes",
      "Scratch blocks and events",
      "Planning a Frogger-style game",
      "Movement and forever loops",
      "IF…THEN interactions",
      "Variables and scoreboards",
      "Alpha and beta testing",
      "Game review and improvement"
    ],
    "essays": [
      [
        "Explain why the order of instructions is important in an algorithm.",
        "Instructions must be in the correct order so each step has the information or materials it needs. A wrong order can cause an incorrect result. The algorithm should be tested and debugged.",
        [
          "order",
          "sequence",
          "correct",
          "result",
          "debug"
        ]
      ],
      [
        "Describe how a loop can make an algorithm shorter and easier to maintain.",
        "A loop places repeated instructions in one block instead of writing them many times. The repeat count or stopping condition controls how often the steps run. Changing one loop is easier than editing every repeated line.",
        [
          "repeat",
          "instructions",
          "count",
          "condition",
          "shorter"
        ]
      ],
      [
        "Explain how an IF…THEN block can make a game interactive.",
        "The block checks a condition such as whether the player touches an obstacle. If it is true, the program runs commands such as reducing a score, showing a message or moving the player. The condition should be tested both ways.",
        [
          "condition",
          "true",
          "obstacle",
          "commands",
          "score"
        ]
      ],
      [
        "Explain the difference between alpha and beta testing and give a test-plan example.",
        "Alpha testing is done by the developer or close colleagues. Beta testing is done by people outside the development team. A test plan records an action, expected result, actual result and any fault to fix.",
        [
          "alpha",
          "beta",
          "outside",
          "expected",
          "actual"
        ]
      ]
    ]
  },
  {
    "id": 3,
    "title": "Networks in society",
    "myTitle": "လူမှုအသိုင်းအဝိုင်းအတွင်း ကွန်ရက်များ",
    "range": "Student Book Unit 3 · pp. 94–135",
    "accent": "pink",
    "overview": "Investigate the impact of technology on daily life and information services, plan and present research, survey social attitudes, compare physical and online networking, and practise safe and respectful behaviour in online communities.",
    "overviewMy": "နေ့စဉ်ဘဝနှင့် Information service များအပေါ် Technology ၏ သက်ရောက်မှုကို လေ့လာခြင်း၊ Research စီစဉ်တင်ပြခြင်း၊ Social impact survey ပြုလုပ်ခြင်း၊ Physical/Online networking နှိုင်းယှဉ်ခြင်းနှင့် Online community တွင် လုံခြုံလေးစားစွာ ပြုမူခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Identify positive and negative impacts of technology.",
        "Technology ၏ ကောင်းကျိုးနှင့် ဆိုးကျိုးများကို ခွဲခြားနိုင်ရန်။"
      ],
      [
        "Compare how the internet changes learning, entertainment and leisure services.",
        "Internet ကြောင့် Learning၊ Entertainment၊ Leisure ပြောင်းလဲပုံကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Plan research and assess the reliability, appropriateness and bias of sources.",
        "Research စီစဉ်ပြီး Source ၏ Reliability၊ Appropriateness၊ Bias ကို စစ်ဆေးနိုင်ရန်။"
      ],
      [
        "Create and interpret a class survey using tables or charts.",
        "Table/Chart ဖြင့် Class survey ဖန်တီးပြီး အဓိပ္ပာယ်ဖော်နိုင်ရန်။"
      ],
      [
        "Use social networks safely and create a responsible code of conduct.",
        "Social network ကို လုံခြုံစွာ သုံးပြီး တာဝန်ရှိသော Code of conduct ဖန်တီးနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "The impacts of technology",
        "Technology changes how people communicate, learn, work, shop and relax. Changes can be positive, such as faster communication and access to information, but can also create problems such as reduced physical activity, distraction, privacy concerns or unequal access. When investigating an impact, consider who is affected, what changed, the benefits, the drawbacks and whether the effect is short-term or long-term. Use examples rather than saying that technology is always good or always bad.",
        "Technology သည် လူများ၏ ဆက်သွယ်ရေး၊ သင်ယူမှု၊ အလုပ်လုပ်မှု၊ ဈေးဝယ်မှုနှင့် အနားယူမှုကို ပြောင်းလဲစေသည်။ ဆက်သွယ်ရေးမြန်ဆန်ခြင်း၊ အချက်အလက်ရရှိလွယ်ခြင်းကဲ့သို့ ကောင်းကျိုးများရှိသလို ကိုယ်လက်လှုပ်ရှားမှုနည်းခြင်း၊ အာရုံပျံ့လွင့်ခြင်း၊ Privacy ပြဿနာနှင့် နည်းပညာမရရှိသူများအကြား ကွာဟမှုတို့လည်း ဖြစ်နိုင်သည်။ သက်ရောက်မှုကို သုံးသပ်ရာတွင် ဘယ်သူထိခိုက်သလဲ၊ ဘာပြောင်းလဲသလဲ၊ အကျိုးကျေးဇူး/အားနည်းချက်နှင့် ရေရှည်သက်ရောက်မှုကို စဉ်းစားပါ။",
        "Choose one technology → identify people affected → list positive and negative impacts → support each point with an example → write a balanced conclusion.",
        "နည်းပညာတစ်ခုရွေးပါ → ထိခိုက်သူများသတ်မှတ်ပါ → ကောင်းကျိုး/ဆိုးကျိုး စာရင်းလုပ်ပါ → ဥပမာဖြင့် ထောက်ခံပါ → မျှတသော နိဂုံးရေးပါ။"
      ],
      [
        "The impact of technology on information services",
        "Information services provide access to knowledge, entertainment and support. The internet has changed learning through virtual learning environments, recorded lessons and video meetings; entertainment through on-demand films, music and games; and leisure through online booking and virtual clubs. These services offer choice and convenience, but users need a suitable device, connectivity and digital skills. Some services also collect personal information, so privacy and safe use matter.",
        "Information service များသည် ဗဟုသုတ၊ ဖျော်ဖြေရေးနှင့် အထောက်အပံ့များ ပေးသည်။ Internet ကြောင့် Learning တွင် Virtual learning environment၊ Recorded lesson နှင့် Video meeting များ အသုံးပြုလာပြီး Entertainment တွင် On-demand film/music/game များ ရရှိလာသည်။ Leisure တွင် Online booking နှင့် Virtual club များ သုံးနိုင်သည်။ အဆင်ပြေမှုရှိသော်လည်း Device၊ Internet နှင့် Digital skill လိုအပ်ပြီး Privacy ကိုလည်း ဂရုစိုက်ရမည်။",
        "Select a service → compare how it worked before and after internet use → list benefits and limitations → note the equipment and skills needed.",
        "Service တစ်ခုရွေးပါ → Internet မသုံးမီ/သုံးပြီး လုပ်ဆောင်ပုံနှိုင်းယှဉ်ပါ → အကျိုးကျေးဇူး/ကန့်သတ်ချက်ရေးပါ → လိုအပ်သော Device နှင့် Skill မှတ်ပါ။"
      ],
      [
        "Planning a research project",
        "A research project begins by turning a broad topic into a focused question. Decide what you need to find out, who can provide reliable information and what methods you will use. You might use books, websites, interviews or questionnaires. Plan a timetable and keep notes about the source of each fact. The project should have a clear audience and an outcome such as a short report or presentation.",
        "Research project တစ်ခုတွင် ကျယ်ပြန့်သော Topic ကို တိကျသော မေးခွန်းအဖြစ် ပြောင်းလဲစတင်ရသည်။ ဘာကိုသိလိုသည်၊ ယုံကြည်ရသော အချက်အလက်ကို ဘယ်သူထံမှရနိုင်သည်၊ ဘယ်နည်းလမ်းသုံးမည်ကို ဆုံးဖြတ်ပါ။ Book၊ Website၊ Interview သို့မဟုတ် Questionnaire သုံးနိုင်သည်။ အချိန်ဇယားထားပြီး Fact တစ်ခုစီ၏ Source မှတ်ပါ။ ရလဒ်ကို Report သို့မဟုတ် Presentation အဖြစ် သတ်မှတ်ထားသော Audience ထံ တင်ပြနိုင်သည်။",
        "Write a research question → decide the audience → choose methods and sources → create a timetable → record sources and findings.",
        "Research question ရေးပါ → Audience သတ်မှတ်ပါ → နည်းလမ်းနှင့် Source ရွေးပါ → အချိန်ဇယားလုပ်ပါ → Source နှင့် တွေ့ရှိချက်များ မှတ်တမ်းတင်ပါ။"
      ],
      [
        "Analysing and presenting a research report · Part 1",
        "Before using a source, assess reliability, appropriateness and bias. Reliability asks whether the information can be trusted. Appropriateness asks whether it suits the research question and audience. Bias occurs when a source presents only one side or tries to persuade the reader. Compare claims with another source and look for evidence. Organise notes into headings so the report follows a logical structure.",
        "Source တစ်ခုကို အသုံးမပြုမီ Reliability၊ Appropriateness နှင့် Bias ကို စစ်ဆေးပါ။ Reliability သည် အချက်အလက်ယုံကြည်ရ/မရ မေးမြန်းခြင်းဖြစ်သည်။ Appropriateness သည် Research question နှင့် Audience အတွက် သင့်တော်/မတော် စစ်ခြင်းဖြစ်သည်။ Bias သည် တစ်ဖက်သတ်သာ ဖော်ပြခြင်း သို့မဟုတ် စာဖတ်သူကို လွှမ်းမိုးရန် ကြိုးစားခြင်းဖြစ်သည်။ Claim များကို အခြား Source နှင့် နှိုင်းယှဉ်ပြီး Evidence ရှာပါ။",
        "Check the author and date → identify the evidence → compare with another source → note any bias → group findings under headings.",
        "Author နှင့် Date စစ်ပါ → Evidence ရှာပါ → အခြား Source နှင့် နှိုင်းယှဉ်ပါ → Bias ရှိ/မရှိ မှတ်ပါ → Heading များအောက်တွင် စုစည်းပါ။"
      ],
      [
        "Analysing and presenting a research report · Part 2",
        "A research report should present information in an order that helps the audience understand the findings. Use a title, introduction, clear sections, evidence and a conclusion. Select a suitable format: a presentation may use images and be shown to a group; a leaflet may be read individually; a report can contain more detail but may be less suited to speaking aloud. Use readable text and explain charts or images.",
        "Research report သည် Audience နားလည်လွယ်စေရန် အချက်အလက်များကို အစီအစဉ်တကျ တင်ပြရမည်။ Title၊ Introduction၊ အပိုင်းခွဲများ၊ Evidence နှင့် Conclusion ပါဝင်သင့်သည်။ Presentation သည် ပုံများနှင့် အုပ်စုရှေ့ပြသရန် သင့်တော်သည်။ Leaflet ကို တစ်ဦးချင်း ဖတ်နိုင်သည်။ Report တွင် အသေးစိတ်ပိုပါသော်လည်း ပါးစပ်ဖြင့် တင်ပြရန် မလွယ်နိုင်ပါ။ စာလုံးဖတ်ရလွယ်ပြီး Graph/Picture များကို ရှင်းပြပါ။",
        "Create a title → group evidence into sections → choose charts or images → write a conclusion → check clarity for the intended audience.",
        "Title တပ်ပါ → Evidence ကို အပိုင်းခွဲပါ → Chart/Picture ရွေးပါ → Conclusion ရေးပါ → သတ်မှတ် Audience အတွက် ရှင်းလင်းမှု စစ်ပါ။"
      ],
      [
        "A class survey on the social impact of technology",
        "A survey gathers opinions or information from a group. A questionnaire can contain closed questions with fixed answers and open questions that allow people to explain their views. Questions should be clear, neutral and relevant. Record the number of responses and keep the same meaning for every participant. When analysing results, look for patterns but do not claim that a small class sample represents everyone. Tables and simple charts make the results easier to compare.",
        "Survey သည် လူအုပ်စုတစ်စုထံမှ အမြင်နှင့် အချက်အလက်များ စုဆောင်းသည်။ Questionnaire တွင် အဖြေသတ်မှတ်ထားသော Closed question နှင့် ကိုယ်ပိုင်အမြင်ရှင်းပြနိုင်သော Open question ပါနိုင်သည်။ မေးခွန်းများသည် ရှင်းလင်း၊ ဘက်မလိုက်၊ သက်ဆိုင်မှုရှိရမည်။ တုံ့ပြန်သူအရေအတွက်ကို မှတ်တမ်းတင်ပြီး လူတိုင်းထံ အဓိပ္ပာယ်တူအောင် မေးပါ။ အုပ်စုငယ်၏ ရလဒ်ကို လူတိုင်းအတွက် ကိုယ်စားပြုသည်ဟု မဆိုသင့်ပါ။",
        "Choose a research question → write neutral questions → collect responses → count answers → create a table or chart → describe what the sample shows.",
        "Research question ရွေးပါ → ဘက်မလိုက်သော မေးခွန်းရေးပါ → အဖြေစုဆောင်းပါ → အဖြေများရေတွက်ပါ → Table/Chart ဖန်တီးပါ → Sample က ဖော်ပြသောအရာကို ရှင်းပြပါ။"
      ],
      [
        "The benefits of physical social networking",
        "Physical social networking means meeting people face to face, for example in a sports club, class activity or community group. It can improve communication skills, coordination, fitness and confidence, and help people build friendships. Technology can support physical activities by arranging meetings, planning routes and sharing information. Online contact should not always replace face-to-face relationships or physical exercise.",
        "Physical social networking ဆိုသည်မှာ အားကစားကလပ်၊ အတန်းလှုပ်ရှားမှု သို့မဟုတ် Community group တွင် မျက်နှာချင်းဆိုင် တွေ့ဆုံခြင်းဖြစ်သည်။ Communication skill၊ Coordination၊ Fitness နှင့် ယုံကြည်မှုကို တိုးတက်စေပြီး မိတ်ဆွေဖွဲ့နိုင်သည်။ Technology သည် တွေ့ဆုံချိန်ညှိခြင်း၊ လမ်းကြောင်းစီစဉ်ခြင်းနှင့် အချက်အလက်မျှဝေခြင်းတို့ကို ကူညီနိုင်သည်။ Online ဆက်သွယ်မှုသည် မျက်နှာချင်းဆိုင် ဆက်ဆံရေးနှင့် ကိုယ်လက်လှုပ်ရှားမှုကို အမြဲအစားမထိုးသင့်ပါ။",
        "Choose a group activity → identify how participants meet → list social and physical benefits → describe one way technology supports the activity.",
        "Group လှုပ်ရှားမှုရွေးပါ → ပါဝင်သူများ တွေ့ဆုံပုံဖော်ပြပါ → လူမှုရေး/ကိုယ်လက်အကျိုးကျေးဇူး စာရင်းလုပ်ပါ → Technology က ကူညီသည့်နည်းတစ်ခု ဖော်ပြပါ။"
      ],
      [
        "Online social networking",
        "Online social networks allow users to communicate, share content and join communities. Benefits include keeping in touch with family, meeting people with shared interests and exchanging information. Risks include cyberbullying, misunderstandings, contact from strangers, reduced exercise and loss of privacy. Users should think carefully before posting and remember that shared content may be copied or seen by a wider audience than expected.",
        "Online social network များသည် လူများကို ဆက်သွယ်စေခြင်း၊ Content မျှဝေခြင်းနှင့် Community ဝင်ခြင်းတို့ ပြုလုပ်စေသည်။ မိသားစုနှင့် ဆက်သွယ်ခြင်း၊ စိတ်ဝင်စားမှုတူသူများ တွေ့ခြင်း၊ အချက်အလက်ဖလှယ်ခြင်းတို့ အကျိုးရှိသည်။ Cyberbullying၊ အဓိပ္ပာယ်လွဲခြင်း၊ သူစိမ်းများထံမှ ဆက်သွယ်မှု၊ ကိုယ်လက်လှုပ်ရှားမှုနည်းခြင်းနှင့် Privacy ဆုံးရှုံးခြင်းတို့ အန္တရာယ်ရှိသည်။ မတင်မီ စဉ်းစားပြီး တင်ထားသောအရာကို အခြားသူများ ကူးယူနိုင်ကြောင်း သိထားပါ။",
        "Check privacy settings → share only suitable content → accept connections carefully → avoid revealing personal details → report harmful behaviour.",
        "Privacy setting စစ်ပါ → သင့်တော်သော Content သာမျှဝေပါ → Connection ကို သေချာလက်ခံပါ → ကိုယ်ရေးအချက်အလက် မဖော်ပြပါနှင့် → မသင့်တော်သောအပြုအမူကို Report လုပ်ပါ။"
      ],
      [
        "Staying safe on social networking sites",
        "Keep personal details private. Avoid sharing your full name, home address, school, daily routes or live location with strangers. Only accept requests from people you know and use strong passcodes. On a shared computer, log out properly. If a message or post is abusive, block the user and report it to the service. Tell a trusted adult if you feel unsafe. A moderator is a person or system that checks posts and comments for suitability.",
        "ကိုယ်ရေးအချက်အလက်များကို လျှို့ဝှက်ထားပါ။ Full name၊ အိမ်လိပ်စာ၊ ကျောင်း၊ နေ့စဉ်သွားလာရာလမ်းကြောင်း သို့မဟုတ် Live location များကို သူစိမ်းထံ မမျှဝေပါနှင့်။ သိကျွမ်းသူများ၏ Request ကိုသာ လက်ခံပြီး Passcode ခိုင်မာစွာ သုံးပါ။ Shared computer တွင် Log out လုပ်ပါ။ မကောင်းသော Message/Post ရှိလျှင် Block နှင့် Report လုပ်ပြီး ယုံကြည်ရသော လူကြီးကို ပြောပြပါ။ Moderator သည် Post/Comment များကို သင့်တော်မှု စစ်ဆေးသူ သို့မဟုတ် စနစ်ဖြစ်သည်။",
        "Review privacy settings → block unknown or abusive users → report harmful posts → save evidence if safe → tell a trusted adult.",
        "Privacy setting ပြန်စစ်ပါ → မသိသူ/အနှောင့်အယှက်ပေးသူကို Block လုပ်ပါ → မကောင်းသော Post ကို Report လုပ်ပါ → လုံခြုံပါက Evidence သိမ်းပါ → ယုံကြည်ရသော လူကြီးကို ပြောပါ။"
      ],
      [
        "Creating a code of conduct for online communities",
        "A code of conduct is a set of rules explaining acceptable behaviour in a community. It may ask members to be respectful, avoid sharing other people’s photos without permission, protect personal information, report harmful content and use block tools when needed. A useful code is short, clear and explains what users should do as well as what they should avoid. The rules should apply consistently to all members.",
        "Code of conduct သည် Community အတွင်း လက်ခံနိုင်သော အပြုအမူကို သတ်မှတ်ထားသော စည်းမျဉ်းအစုဖြစ်သည်။ အခြားသူ၏ ဓာတ်ပုံကို ခွင့်ပြုချက်မရှိဘဲ မတင်ရန်၊ ကိုယ်ရေးအချက်အလက် ကာကွယ်ရန်၊ အန္တရာယ်ရှိသော Content ကို Report လုပ်ရန်နှင့် လိုအပ်ပါက Block သုံးရန် ဖော်ပြနိုင်သည်။ Code သည် တိုတောင်း၊ ရှင်းလင်းပြီး လုပ်သင့်/မလုပ်သင့် နှစ်မျိုးလုံး ပါဝင်သင့်သည်။",
        "Identify common risks → write 5–7 clear rules → include reporting and blocking steps → explain who can help → share and review the code.",
        "ဖြစ်လေ့ရှိသော အန္တရာယ်များသတ်မှတ်ပါ → ရှင်းလင်းသော စည်းမျဉ်း ၅–၇ ချက်ရေးပါ → Report/Block အဆင့်များထည့်ပါ → အကူအညီပေးနိုင်သူကို ဖော်ပြပါ → Code ကို မျှဝေပြီး ပြန်လည်သုံးသပ်ပါ။"
      ]
    ],
    "terms": [
      [
        "Technology",
        "Tools and systems developed to solve problems or perform tasks.",
        "ပြဿနာဖြေရှင်း/လုပ်ငန်းဆောင်ရွက်ရန် ဖန်တီးထားသော ကိရိယာနှင့် စနစ်များ။"
      ],
      [
        "Impact",
        "An effect or change caused by something.",
        "အရာတစ်ခုကြောင့် ဖြစ်ပေါ်လာသော သက်ရောက်မှု။"
      ],
      [
        "Digital technology",
        "Electronic tools and systems that create or process digital data.",
        "Digital data ဖန်တီး/လုပ်ဆောင်သော အီလက်ထရောနစ် ကိရိယာနှင့် စနစ်များ။"
      ],
      [
        "Information service",
        "A service that provides access to information or support.",
        "အချက်အလက် သို့မဟုတ် အထောက်အပံ့ ပေးသော ဝန်ဆောင်မှု။"
      ],
      [
        "Virtual learning environment",
        "An online space for learning materials and activities.",
        "သင်ခန်းစာနှင့် လှုပ်ရှားမှုများအတွက် Online ပတ်ဝန်းကျင်။"
      ],
      [
        "On-demand service",
        "A service accessed when the user chooses.",
        "အသုံးပြုသူရွေးချယ်သည့်အချိန်တွင် ရယူနိုင်သော ဝန်ဆောင်မှု။"
      ],
      [
        "Research project",
        "A planned task that investigates a question or topic.",
        "မေးခွန်း/ခေါင်းစဉ်တစ်ခုကို စုံစမ်းလေ့လာသော စီစဉ်ထားသည့် လုပ်ငန်း။"
      ],
      [
        "Research question",
        "A focused question that guides an investigation.",
        "စုံစမ်းလေ့လာမှုကို ဦးတည်ပေးသော တိကျသည့် မေးခွန်း။"
      ],
      [
        "Source",
        "Where information or evidence comes from.",
        "အချက်အလက်/Evidence ရရှိသော နေရာ သို့မဟုတ် မူရင်း။"
      ],
      [
        "Reliability",
        "How trustworthy or accurate a source is.",
        "Source တစ်ခု၏ ယုံကြည်စိတ်ချရမှု/တိကျမှု။"
      ],
      [
        "Appropriateness",
        "How suitable information is for the task and audience.",
        "လုပ်ငန်းနှင့် Audience အတွက် သင့်တော်မှု။"
      ],
      [
        "Bias",
        "A one-sided view that may unfairly influence a conclusion.",
        "နိဂုံးကို မမျှတစွာ သက်ရောက်စေနိုင်သော တစ်ဖက်သတ်အမြင်။"
      ],
      [
        "Evidence",
        "Facts or examples used to support a point.",
        "အဆိုတစ်ခုကို ထောက်ခံသော အချက်အလက်/ဥပမာ။"
      ],
      [
        "Audience",
        "The people who will read, watch or hear a presentation.",
        "တင်ပြချက်ကို ဖတ်/ကြည့်/နားထောင်မည့် ပရိသတ်။"
      ],
      [
        "Report",
        "A structured document presenting research and findings.",
        "Research နှင့် တွေ့ရှိချက်များကို စနစ်တကျ တင်ပြသော စာတမ်း။"
      ],
      [
        "Presentation",
        "Information shared with an audience using spoken or visual material.",
        "စကားပြော သို့မဟုတ် Visual material ဖြင့် ပရိသတ်ထံ မျှဝေသော တင်ပြမှု။"
      ],
      [
        "Survey",
        "A method of collecting information from a group.",
        "လူအုပ်စုထံမှ အချက်အလက်စုဆောင်းသော နည်းလမ်း။"
      ],
      [
        "Questionnaire",
        "A set of questions used in a survey.",
        "Survey တွင် သုံးသော မေးခွန်းအစု။"
      ],
      [
        "Open question",
        "A question allowing a person to give their own explanation.",
        "ကိုယ်ပိုင်အမြင်ဖြင့် ရှင်းပြနိုင်သော မေးခွန်း။"
      ],
      [
        "Closed question",
        "A question with a limited or fixed set of answers.",
        "အဖြေရွေးချယ်မှု သတ်မှတ်ထားသော မေးခွန်း။"
      ],
      [
        "Response",
        "An answer given by a survey participant.",
        "Survey ပါဝင်သူ၏ ပြန်လည်ဖြေကြားချက်။"
      ],
      [
        "Sample",
        "The group of people who take part in research.",
        "Research တွင် ပါဝင်သော လူအုပ်စု။"
      ],
      [
        "Social networking",
        "Building and maintaining connections with other people.",
        "အခြားသူများနှင့် ဆက်သွယ်မှုတည်ဆောက်/ထိန်းသိမ်းခြင်း။"
      ],
      [
        "Physical networking",
        "Meeting people face to face in activities or groups.",
        "လှုပ်ရှားမှု/အဖွဲ့များတွင် မျက်နှာချင်းဆိုင် တွေ့ဆုံခြင်း။"
      ],
      [
        "Online community",
        "A group interacting through an online service.",
        "Online service မှတစ်ဆင့် အပြန်အလှန်ဆက်သွယ်သော အဖွဲ့။"
      ],
      [
        "Social network",
        "An online service for connecting and sharing with people.",
        "လူများနှင့် ဆက်သွယ်/မျှဝေရန် Online ဝန်ဆောင်မှု။"
      ],
      [
        "Cyberbullying",
        "Using digital communication to harass or hurt someone.",
        "Digital ဆက်သွယ်မှုကို သုံး၍ တစ်ဦးကို အနှောင့်အယှက်/ထိခိုက်စေခြင်း။"
      ],
      [
        "Anonymity",
        "A state where a user’s real identity is not shown.",
        "အသုံးပြုသူ၏ အမှန်တကယ်အထောက်အထား မပေါ်လွင်သော အခြေအနေ။"
      ],
      [
        "Moderator",
        "A person or system checking posts and comments for suitability.",
        "Post/Comment များ သင့်တော်မှု စစ်ဆေးသူ သို့မဟုတ် စနစ်။"
      ],
      [
        "Block",
        "A tool that stops a user from contacting you through a service.",
        "Service မှတစ်ဆင့် အသုံးပြုသူတစ်ဦး ဆက်သွယ်ခြင်းကို တားဆီးသော Tool။"
      ],
      [
        "Report",
        "A tool for notifying a service about harmful or unsuitable content.",
        "မသင့်တော်သော Content အကြောင်း Service ထံ အသိပေးသော Tool။"
      ],
      [
        "Friend request",
        "A request to connect directly with another user.",
        "အခြားအသုံးပြုသူနှင့် တိုက်ရိုက်ချိတ်ဆက်ရန် တောင်းဆိုချက်။"
      ],
      [
        "Privacy",
        "Control over personal information and who can see it.",
        "ကိုယ်ရေးအချက်အလက်နှင့် ကြည့်ရှုနိုင်သူများအပေါ် ထိန်းချုပ်မှု။"
      ],
      [
        "Personal information",
        "Details that can identify or locate a person.",
        "လူတစ်ဦးကို ခွဲခြားသိရှိ/တည်နေရာသိနိုင်စေသော အချက်အလက်။"
      ],
      [
        "Code of conduct",
        "A set of rules for acceptable behaviour in a community.",
        "Community အတွင်း သင့်တော်သော အပြုအမူဆိုင်ရာ စည်းမျဉ်းအစု။"
      ]
    ],
    "examples": [
      "A student uses a virtual learning environment to watch a lesson again at home.",
      "A class survey records 30 students’ recent use of video, tablets and games.",
      "A sports club combines face-to-face activities with online route planning.",
      "A user blocks and reports an abusive account and tells a trusted adult."
    ],
    "examplesMy": [
      "ကျောင်းသားတစ်ဦးသည် အိမ်တွင် သင်ခန်းစာပြန်ကြည့်ရန် Virtual learning environment ကို သုံးသည်။",
      "အတန်း Survey တွင် ကျောင်းသား ၃၀ ဦး၏ Video၊ Tablet နှင့် Game အသုံးပြုမှုကို မှတ်တမ်းတင်သည်။",
      "အားကစားကလပ်သည် မျက်နှာချင်းဆိုင် လှုပ်ရှားမှုနှင့် Online လမ်းကြောင်းစီစဉ်မှုကို ပေါင်းစပ်သည်။",
      "အသုံးပြုသူတစ်ဦးသည် မကောင်းသော Account ကို Block/Report လုပ်ပြီး ယုံကြည်ရသော လူကြီးကို ပြောပြသည်။"
    ],
    "table": {
      "caption": "Class survey · sample data for 30 students",
      "headers": [
        "Survey question",
        "Yes",
        "No"
      ],
      "rows": [
        [
          "Watched a video in past 24 hours",
          "30",
          "0"
        ],
        [
          "Watched on a TV",
          "8",
          "22"
        ],
        [
          "Watched on a tablet",
          "12",
          "18"
        ],
        [
          "Played a computer game",
          "22",
          "8"
        ],
        [
          "Played with someone unknown online",
          "12",
          "18"
        ],
        [
          "Did homework on a device",
          "20",
          "10"
        ],
        [
          "Went to a club/activity",
          "7",
          "23"
        ]
      ]
    },
    "activities": [
      [
        "Technology impact map",
        "Choose a technology and map its positive and negative effects on three groups.",
        "Technology တစ်ခုရွေးပြီး လူအုပ်စုသုံးစုအပေါ် ကောင်းကျိုး/ဆိုးကျိုးကို Map ပုံစံပြပါ။"
      ],
      [
        "Research source check",
        "Compare two websites on the same topic for author, date, evidence and bias.",
        "Topic တူသော Website နှစ်ခုကို Author၊ Date၊ Evidence နှင့် Bias အရ နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Class questionnaire",
        "Write four neutral questions, collect responses and show the totals in a table.",
        "ဘက်မလိုက်သော မေးခွန်းလေးခုရေး၊ အဖြေစုဆောင်းပြီး Table တွင် စုစုပေါင်းပြပါ။"
      ],
      [
        "Survey chart",
        "Turn a set of class survey totals into a bar chart and write two conclusions.",
        "Class survey စုစုပေါင်းကို Bar chart ပြောင်းပြီး နိဂုံးနှစ်ချက်ရေးပါ။"
      ],
      [
        "Online safety code",
        "Create six simple rules for a safe online class community.",
        "လုံခြုံသော Online class community အတွက် ရိုးရှင်းသော စည်းမျဉ်းခြောက်ချက်ဖန်တီးပါ။"
      ]
    ],
    "slides": [
      "Technology in daily life",
      "Benefits and risks",
      "Information services online",
      "Planning a research project",
      "Reliable sources and bias",
      "Presenting a research report",
      "Surveys and questionnaires",
      "Physical and online communities",
      "Online safety tools",
      "Code of conduct and review"
    ],
    "essays": [
      [
        "Describe two positive and two negative impacts of digital technology on daily life.",
        "Positive impacts include faster communication and easier access to learning materials. Negative impacts may include less physical activity and privacy risks. The impact depends on how the technology is used and who has access.",
        [
          "communication",
          "learning",
          "activity",
          "privacy",
          "access"
        ]
      ],
      [
        "Explain the difference between reliability, appropriateness and bias when choosing a source.",
        "Reliability is whether the source can be trusted. Appropriateness is whether it suits the question and audience. Bias is whether it presents only one side or tries to influence the reader. Compare sources and evidence before using information.",
        [
          "reliability",
          "trust",
          "appropriateness",
          "audience",
          "bias"
        ]
      ],
      [
        "Describe how a class survey can be planned and presented.",
        "Write clear and neutral questions, choose the group, collect responses consistently, count the results and place them in a table or chart. Explain what the sample shows without claiming it represents everyone.",
        [
          "questions",
          "neutral",
          "responses",
          "table",
          "sample"
        ]
      ],
      [
        "Give safe actions a student should take when experiencing cyberbullying or seeing harmful content.",
        "Do not retaliate or share the content further. Block the user, report the post to the service, keep evidence if safe, review privacy settings and tell a trusted adult.",
        [
          "block",
          "report",
          "evidence",
          "privacy",
          "trusted adult"
        ]
      ]
    ]
  },
  {
    "id": 4,
    "title": "Video editing",
    "myTitle": "Video Editing",
    "range": "Student Book Unit 4 · pp. 136–181",
    "accent": "green",
    "overview": "Plan and stage a short video, record sound and text, storyboard the scenes, shoot safely with suitable camera techniques, edit clips with transitions and effects, and share videos responsibly.",
    "overviewMy": "Video တိုတောင်းတစ်ခုကို စီစဉ်/တည်ဆောက်ခြင်း၊ အသံနှင့်စာသားထည့်ခြင်း၊ Storyboard ပြုလုပ်ခြင်း၊ Camera နည်းလမ်းမှန်ဖြင့် လုံခြုံစွာ ရိုက်ကူးခြင်း၊ Clip များကို Transition/Effect များဖြင့် Edit လုပ်ခြင်းနှင့် တာဝန်ယူ၍ မျှဝေခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain staging, shots, frames and scenes.",
        "Staging၊ Shot၊ Frame နှင့် Scene တို့ကို ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Select suitable sound and on-screen text for a video.",
        "Video အတွက် သင့်တော်သော Sound နှင့် On-screen text ရွေးချယ်နိုင်ရန်။"
      ],
      [
        "Create a storyboard and shot list for a short video.",
        "Video တိုအတွက် Storyboard နှင့် Shot list ဖန်တီးနိုင်ရန်။"
      ],
      [
        "Use safe camera techniques and basic editing operations.",
        "လုံခြုံသော Camera နည်းလမ်းနှင့် Basic editing လုပ်ဆောင်ချက်များ သုံးနိုင်ရန်။"
      ],
      [
        "Share video responsibly, respecting permission and privacy.",
        "ခွင့်ပြုချက်နှင့် Privacy ကို လေးစားကာ Video ကို တာဝန်ယူမျှဝေနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Staging on screen",
        "Staging is planning everything that will appear in a video before filming. Think about the audience, location, background, characters, props, camera position and action. A frame is one still picture; a shot is a series of frames recorded continuously; a scene is a part of the film taking place in a particular setting or time. Planning avoids missing props, unsuitable backgrounds or confusing action. Arrange people and objects so the camera captures the important information.",
        "Staging သည် Video မရိုက်မီ မျက်နှာပြင်ပေါ်တွင် ဘာတွေပါမည်ကို စီစဉ်ခြင်းဖြစ်သည်။ Audience၊ Location၊ Background၊ Character၊ Prop၊ Camera တည်နေရာနှင့် လုပ်ဆောင်ချက်တို့ကို စဉ်းစားရမည်။ Frame သည် ရုပ်ငြိမ်ပုံတစ်ပုံ၊ Shot သည် ဆက်တိုက်ရိုက်ထားသော Frame များ၊ Scene သည် သတ်မှတ်ထားသော နေရာ/အချိန်တွင် ဖြစ်ပွားသော ရုပ်ရှင်အပိုင်းဖြစ်သည်။ ကြိုတင်စီစဉ်ခြင်းက ပစ္စည်းမရှိခြင်းနှင့် လှုပ်ရှားမှုမရှင်းလင်းခြင်းကို ကာကွယ်သည်။",
        "Define the purpose and audience → choose a location → list characters and props → plan the camera position → rehearse the action.",
        "ရည်ရွယ်ချက်နှင့် Audience သတ်မှတ်ပါ → နေရာရွေးပါ → Character/Prop စာရင်းလုပ်ပါ → Camera တည်နေရာစီစဉ်ပါ → သရုပ်ဆောင်မှု အစမ်းလေ့ကျင့်ပါ။"
      ],
      [
        "Using sound",
        "Sound helps the viewer understand the setting and mood of a video. It can include dialogue, natural sounds, sound effects and background music. A rainy driving scene might include rain, wipers and engine noise; a beach scene may include waves, birds and footsteps. Music should suit the mood and should not overpower speech. Record in a quiet place, check the microphone and listen back for unwanted noise.",
        "Sound သည် Video ၏ နေရာနှင့် Mood ကို နားလည်စေသည်။ Dialogue၊ သဘာဝအသံ၊ Sound effect နှင့် Background music ပါနိုင်သည်။ မိုးရွာသော ကားမောင်းခန်းတွင် မိုးသံ၊ Wiper နှင့် Engine အသံပါနိုင်သည်။ ကမ်းခြေခန်းတွင် လှိုင်းသံ၊ ငှက်သံနှင့် ခြေသံပါနိုင်သည်။ Music သည် Mood နှင့် ကိုက်ညီပြီး စကားသံကို မဖုံးသင့်ပါ။ တိတ်ဆိတ်သောနေရာတွင် Record လုပ်ပြီး မလိုလားသော Noise ရှိ/မရှိ ပြန်နားထောင်ပါ။",
        "List sounds for each scene → decide which are speech, natural sound or effects → choose suitable music → record → listen and adjust levels.",
        "Scene တစ်ခုစီအတွက် အသံစာရင်းလုပ်ပါ → Speech/Natural sound/Effect ခွဲပါ → သင့်တော်သော Music ရွေးပါ → Record လုပ်ပါ → ပြန်နားထောင်ပြီး အသံအဆင့်ညှိပါ။"
      ],
      [
        "Good use of text",
        "Text can communicate information that viewers may miss in the picture or sound. Common uses include opening titles, location labels, subtitles, speaker names and end credits. Keep text short, large enough to read and visible for long enough. Use a consistent font and colour style. A script contains dialogue and some stage directions; a screenplay is a plan for recreating the story on film and can include scene order, camera positions and action.",
        "Text သည် ပုံ/အသံမှ မမြင်မကြားနိုင်သော အချက်အလက်ကို ကြည့်သူထံ ပေးပို့နိုင်သည်။ Opening title၊ Location label၊ Subtitle၊ Speaker name နှင့် End credit တို့ ပါဝင်နိုင်သည်။ စာသားတိုတို၊ ဖတ်ရလွယ်သော အရွယ်အစားနှင့် ဖတ်ချိန်လုံလောက်စွာ ထားပါ။ Font/Colour ကို တစ်သမတ်တည်း သုံးပါ။ Script တွင် Dialogue နှင့် Stage direction ပါပြီး Screenplay သည် ဇာတ်လမ်းကို Film အဖြစ် ပြန်ရိုက်ရန် Scene အစီအစဉ်၊ Camera တည်နေရာနှင့် လုပ်ဆောင်ချက်တို့ ပါသော Plan ဖြစ်သည်။",
        "Identify text needed → write concise wording → choose readable size and contrast → set display duration → proofread spelling and names.",
        "လိုအပ်သော Text သတ်မှတ်ပါ → စာသားတိုတိုရေးပါ → ဖတ်ရလွယ်သော အရွယ်/Contrast ရွေးပါ → ပြသချိန်သတ်မှတ်ပါ → စာလုံးပေါင်းနှင့် အမည်စစ်ပါ။"
      ],
      [
        "Planning a storyboard for a short video",
        "A storyboard is a visual plan showing the scenes or shots in the order they will appear. Each box may contain a sketch, scene heading, action, camera angle, movement, background, sound and text. Storyboards help identify missing information before filming and make it easier to plan time and equipment. Use a sequence that makes sense to the audience and include a beginning, middle and ending.",
        "Storyboard သည် Video တွင် ပြသမည့် Scene/Shot များကို အစီအစဉ်အတိုင်း ဖော်ပြသော Visual plan ဖြစ်သည်။ အကွက်တစ်ခုစီတွင် Sketch၊ Scene heading၊ လုပ်ဆောင်ချက်၊ Camera angle/movement၊ Background၊ Sound နှင့် Text ပါနိုင်သည်။ ရိုက်ကူးမီ မပြည့်စုံသော အချက်အလက်များရှာဖွေရန်နှင့် အချိန်/ပစ္စည်း စီစဉ်ရန် ကူညီသည်။ အစ၊ အလယ်၊ အဆုံး ရှိသော အစီအစဉ်ကို သုံးပါ။",
        "Write the video purpose → split the story into scenes → sketch each shot → add sound and text notes → number the scenes → review the sequence.",
        "Video ရည်ရွယ်ချက်ရေးပါ → ဇာတ်လမ်းကို Scene ခွဲပါ → Shot တစ်ခုစီ Sketch ဆွဲပါ → Sound/Text မှတ်ချက်ထည့်ပါ → Scene နံပါတ်စဉ်ပါ → အစီအစဉ်ပြန်စစ်ပါ။"
      ],
      [
        "Completing the storyboard and shot list",
        "A shot list turns the storyboard into a practical filming plan. It records the location, characters, props, camera angle, movement and any sound needed. A close-up shows a small detail; a wide shot shows more of the setting; a pan moves the camera horizontally; zoom changes the apparent size of the subject. Finger-framing can help preview how a scene will fit inside the camera frame.",
        "Shot list သည် Storyboard ကို လက်တွေ့ရိုက်ကူးရေး Plan အဖြစ် ပြောင်းထားခြင်းဖြစ်သည်။ Location၊ Character၊ Prop၊ Camera angle၊ Movement နှင့် လိုအပ်သော Sound များကို မှတ်တမ်းတင်သည်။ Close-up သည် အသေးစိတ်ကို ပြပြီး Wide shot သည် ပတ်ဝန်းကျင်ပိုများစွာ ပြသည်။ Pan သည် Camera ကို အလျားလိုက် ရွှေ့ခြင်း၊ Zoom သည် Subject ၏ မြင်ရသော အရွယ်အစားကို ပြောင်းခြင်းဖြစ်သည်။ Finger-framing ဖြင့် Frame ထဲ ဘယ်လိုပေါ်မည်ကို ကြိုမြင်နိုင်သည်။",
        "Create a numbered shot list → choose close-up/wide/pan/zoom where suitable → identify props and location → estimate each shot duration.",
        "Shot list နံပါတ်စဉ်လုပ်ပါ → သင့်တော်သော Close-up/Wide/Pan/Zoom ရွေးပါ → Prop နှင့် Location သတ်မှတ်ပါ → Shot တစ်ခုစီ ကြာချိန်ခန့်မှန်းပါ။"
      ],
      [
        "Shooting a video safely",
        "Before filming, check that devices are charged and undamaged, cables do not create trip hazards and tripods are stable. Ask permission before filming people. Keep equipment away from liquids and avoid filming while walking in unsafe places. Check the weather when filming outside and keep the equipment in a safe position. Plan who carries each item and where equipment will be stored between shots.",
        "မရိုက်မီ Device အားပြည့်/မပြည့်၊ ပျက်စီးမှုရှိ/မရှိ စစ်ပါ။ ကြိုးများက ခလုတ်တိုက်စရာမဖြစ်စေပါနှင့်၊ Tripod တည်ငြိမ်စေရမည်။ လူတစ်ဦးကို မရိုက်မီ ခွင့်ပြုချက်ယူပါ။ ပစ္စည်းများကို ရေနှင့်ဝေးဝေးထားပြီး အန္တရာယ်ရှိသောနေရာတွင် လမ်းလျှောက်ရင်း မရိုက်ပါနှင့်။ အပြင်တွင်ရိုက်လျှင် ရာသီဥတုစစ်ပါ။",
        "Charge and inspect devices → obtain permission → secure cables and tripod → choose a safe position → stop if conditions become unsafe.",
        "Device အားသွင်းပြီး စစ်ပါ → ခွင့်ပြုချက်ယူပါ → ကြိုးနှင့် Tripod လုံခြုံစေပါ → လုံခြုံသောနေရာရွေးပါ → အန္တရာယ်ရှိလာပါက ရပ်ပါ။"
      ],
      [
        "Setting camera shots and recording footage",
        "The camera should capture a clear view of the important action. Focus controls which object appears sharp. Light balance affects how bright or dark the image looks. A tripod keeps the camera steady. Camera angle describes whether the camera points up, down or across the scene. Optical zoom changes the lens view and usually keeps detail better than digital zoom, which enlarges pixels and can reduce clarity. Record more than one take if the action or sound is uncertain.",
        "Camera သည် အရေးကြီးသော လုပ်ဆောင်ချက်ကို ရှင်းလင်းစွာ ရိုက်ကူးရမည်။ Focus သည် ဘယ်အရာကို ပြတ်သားစွာ ပြမည်ကို သတ်မှတ်သည်။ Light balance သည် ပုံ၏ အလင်းအမှောင်ကို သက်ရောက်စေသည်။ Tripod သည် Camera ကို တည်ငြိမ်စေသည်။ Camera angle သည် အပေါ်/အောက်/အလျား ဦးတည်ချက်ဖြစ်သည်။ Optical zoom သည် Lens view ပြောင်းသောကြောင့် Digital zoom ထက် Detail ပိုထိန်းနိုင်လေ့ရှိသည်။",
        "Set the camera on a stable support → check focus and light → choose the angle and zoom → record a short test → review and repeat if necessary.",
        "Camera ကို တည်ငြိမ်သော Support ပေါ်တင်ပါ → Focus/Light စစ်ပါ → Angle/Zoom ရွေးပါ → စမ်းသပ် Clip ရိုက်ပါ → ပြန်ကြည့်ပြီး လိုပါက ထပ်ရိုက်ပါ။"
      ],
      [
        "Editing video clips",
        "Video editing combines and changes recorded clips to create a finished sequence. Cropping removes unwanted material from the beginning or end of a clip. Splitting divides one clip into smaller parts. Splicing joins clips together. Transitions such as fade or wipe change from one clip to another. Add titles, captions and sound where they help the story. Save an original copy before editing so mistakes can be reversed.",
        "Video editing သည် ရိုက်ထားသော Clip များကို ပေါင်းစပ်/ပြင်ဆင်ပြီး Video အပြီးသတ်ဖန်တီးခြင်းဖြစ်သည်။ Cropping သည် Clip အစ/အဆုံးမှ မလိုသောအပိုင်း ဖယ်ရှားခြင်း၊ Splitting သည် Clip တစ်ခုကို အပိုင်းငယ်ခွဲခြင်း၊ Splicing သည် Clip များပေါင်းခြင်းဖြစ်သည်။ Fade/Wipe ကဲ့သို့ Transition များဖြင့် Clip တစ်ခုမှ တစ်ခုသို့ ပြောင်းနိုင်သည်။ Story အတွက် အထောက်အကူဖြစ်သော Title/Caption/Sound ထည့်ပါ။ မပြင်မီ Original copy သိမ်းပါ။",
        "Import clips → arrange them in scene order → crop and split unwanted parts → join clips → add transitions and sound → preview the whole video.",
        "Clip များ Import လုပ်ပါ → Scene အစီအစဉ်အတိုင်း စီပါ → မလိုသောအပိုင်း Crop/Split လုပ်ပါ → Clip များပေါင်းပါ → Transition/Sound ထည့်ပါ → Video တစ်ခုလုံး Preview ကြည့်ပါ။"
      ],
      [
        "Reviewing and finalising the edit",
        "A final edit should have a clear beginning and ending, understandable sound, readable text and smooth transitions. Watch the whole video from start to finish and check for sudden cuts, blank frames, spelling errors, background noise or missing credits. Ask another person to review it because they may notice issues you missed. Export or save the final version using a suitable file name and format.",
        "Final edit တွင် စတင်မှု/အဆုံးသတ် ရှင်းလင်းခြင်း၊ နားလည်ရသော အသံ၊ ဖတ်ရလွယ်သော Text နှင့် ချောမွေ့သော Transition ရှိသင့်သည်။ Video တစ်ခုလုံး ပြန်ကြည့်ပြီး ရုတ်တရက်ဖြတ်ခြင်း၊ Blank frame၊ စာလုံးပေါင်းမှားခြင်း၊ Background noise နှင့် Credit ပျောက်နေခြင်းတို့ စစ်ပါ။ အခြားသူတစ်ဦးကို Review ခိုင်းပါ။ နောက်ဆုံး Version ကို သင့်တော်သော File name/Format ဖြင့် Save သို့မဟုတ် Export လုပ်ပါ။",
        "Preview the full timeline → check sound and text → collect feedback → correct problems → export the final copy → store a backup.",
        "Timeline တစ်ခုလုံး Preview ကြည့်ပါ → Sound/Text စစ်ပါ → Feedback စုပါ → ပြဿနာများ ပြင်ပါ → Final copy Export လုပ်ပါ → Backup သိမ်းပါ။"
      ],
      [
        "Safe and responsible use of videos",
        "Do not film or publish someone without permission. Avoid showing school names, home addresses, daily routines or other personal details. A video can be copied, shared and commented on by a much wider audience than expected. Do not upload footage that humiliates or bullies someone. If harmful content is shared, report it to the platform and tell a trusted adult. Respect copyright and use music or images only when permission or an appropriate licence allows it.",
        "ခွင့်ပြုချက်မရှိဘဲ လူတစ်ဦးကို ရိုက်ကူး/ထုတ်ဝေခြင်း မလုပ်ပါနှင့်။ ကျောင်းအမည်၊ အိမ်လိပ်စာ၊ နေ့စဉ်လုပ်ရိုးလုပ်စဉ်နှင့် ကိုယ်ရေးအချက်အလက်များ မပြပါနှင့်။ Video ကို မျှော်မှန်းထားသည်ထက် ပိုကျယ်ပြန့်သော Audience က ကူးယူ/မျှဝေ/Comment လုပ်နိုင်သည်။ တစ်ဦးကို အရှက်ရစေသော သို့မဟုတ် Bully လုပ်သော Video မတင်ပါနှင့်။ မကောင်းသော Content တွေ့လျှင် Platform ထံ Report လုပ်ပြီး ယုံကြည်ရသော လူကြီးကို ပြောပါ။ Copyright ကို လေးစားပါ။",
        "Get consent → remove personal details → check music and image permissions → review the video for harm → share only with the intended audience.",
        "ခွင့်ပြုချက်ယူပါ → ကိုယ်ရေးအချက်အလက်ဖယ်ပါ → Music/Image ခွင့်ပြုချက်စစ်ပါ → Video တွင် ထိခိုက်စေမှုရှိ/မရှိ စစ်ပါ → သတ်မှတ်ထားသော Audience ထံသာ မျှဝေပါ။"
      ]
    ],
    "terms": [
      [
        "Video",
        "A sequence of moving images, usually with sound.",
        "အသံပါနိုင်သော ရွေ့လျားပုံများ၏ အစဉ်။"
      ],
      [
        "Staging",
        "Planning everything that will appear in a filmed scene.",
        "ရိုက်ကူးမည့် Scene တွင် ပါဝင်မည့်အရာများ ကြိုတင်စီစဉ်ခြင်း။"
      ],
      [
        "Scene",
        "A part of a film taking place in one setting or time.",
        "တစ်နေရာ/အချိန်အတွင်း ဖြစ်ပွားသော Video အပိုင်း။"
      ],
      [
        "Shot",
        "A series of frames recorded continuously.",
        "ဆက်တိုက်ရိုက်ကူးထားသော Frame အစဉ်။"
      ],
      [
        "Frame",
        "One still picture in a video.",
        "Video အတွင်းရှိ ရုပ်ငြိမ်ပုံတစ်ပုံ။"
      ],
      [
        "Camera angle",
        "The direction from which the camera views a subject.",
        "Subject ကို Camera က ကြည့်သည့် ဦးတည်ချက်။"
      ],
      [
        "Background",
        "The setting behind the main subject.",
        "အဓိကအရာနောက်ရှိ ပတ်ဝန်းကျင်။"
      ],
      [
        "Prop",
        "An object used by a character or in a scene.",
        "Character သို့မဟုတ် Scene တွင် အသုံးပြုသော ပစ္စည်း။"
      ],
      [
        "Storyboard",
        "A visual plan of scenes or shots in order.",
        "Scene/Shot များကို အစီအစဉ်အတိုင်း ပြသော Visual plan။"
      ],
      [
        "Shot list",
        "A list of the shots needed for a video.",
        "Video အတွက် လိုအပ်သော Shot များစာရင်း။"
      ],
      [
        "Script",
        "Written dialogue and stage directions.",
        "စကားပြောနှင့် Stage direction များရေးထားသော စာတမ်း။"
      ],
      [
        "Screenplay",
        "A plan for how a story will be recreated on film.",
        "ဇာတ်လမ်းကို Film အဖြစ် ပြန်လည်ဖန်တီးရန် Plan။"
      ],
      [
        "Dialogue",
        "Words spoken by people in a video.",
        "Video ထဲတွင် လူများပြောသော စကား။"
      ],
      [
        "Natural sound",
        "Sound captured from the real environment.",
        "တကယ့်ပတ်ဝန်းကျင်မှ ဖမ်းယူထားသော အသံ။"
      ],
      [
        "Sound effect",
        "A sound added or selected to represent an action.",
        "လုပ်ဆောင်ချက်တစ်ခုကို ဖော်ပြရန် ထည့်သွင်းသော အသံ။"
      ],
      [
        "Background music",
        "Music played under the main action or speech.",
        "အဓိကလုပ်ဆောင်ချက်/စကားသံနောက်ခံတွင် ဖွင့်သော သီချင်း။"
      ],
      [
        "Subtitle",
        "Text showing speech or translation on screen.",
        "စကားပြော/ဘာသာပြန်ကို မျက်နှာပြင်ပေါ် စာသားဖြင့် ပြသခြင်း။"
      ],
      [
        "Title credits",
        "Text introducing the video or its subject.",
        "Video သို့မဟုတ် ခေါင်းစဉ်ကို မိတ်ဆက်သော စာသား။"
      ],
      [
        "End credits",
        "Text listing people and resources involved.",
        "ပါဝင်သူများနှင့် အသုံးပြုထားသော အရင်းအမြစ်များ စာရင်း။"
      ],
      [
        "Close-up",
        "A shot showing a subject or detail closely.",
        "Subject သို့မဟုတ် အသေးစိတ်ကို နီးကပ်စွာ ပြသော Shot။"
      ],
      [
        "Wide shot",
        "A shot showing a larger area or setting.",
        "ဧရိယာ/ပတ်ဝန်းကျင် ပိုကျယ်စွာ ပြသော Shot။"
      ],
      [
        "Pan",
        "Moving the camera horizontally while filming.",
        "ရိုက်ကူးနေစဉ် Camera ကို အလျားလိုက် ရွှေ့ခြင်း။"
      ],
      [
        "Zoom",
        "Changing how large the subject appears.",
        "Subject မြင်ရသည့် အရွယ်အစားကို ပြောင်းခြင်း။"
      ],
      [
        "Optical zoom",
        "Zoom using the camera lens.",
        "Camera lens ဖြင့် Zoom လုပ်ခြင်း။"
      ],
      [
        "Digital zoom",
        "Enlarging part of a digital image electronically.",
        "Digital ပုံ၏ အပိုင်းကို အီလက်ထရောနစ်နည်းဖြင့် ချဲ့ခြင်း။"
      ],
      [
        "Focus",
        "The setting that makes a selected object appear sharp.",
        "ရွေးထားသော အရာကို ပြတ်သားစေသော Setting။"
      ],
      [
        "Light balance",
        "The amount and balance of light captured in the image.",
        "ပုံတွင် ဖမ်းယူထားသော အလင်းပမာဏနှင့် ညှိနှိုင်းမှု။"
      ],
      [
        "Tripod",
        "A three-legged support that keeps a camera steady.",
        "Camera တည်ငြိမ်စေရန် သုံးသော ခြေသုံးချောင်း Support။"
      ],
      [
        "Aspect ratio",
        "The proportional relationship between frame width and height.",
        "Frame အကျယ်နှင့် အမြင့်အချိုး။"
      ],
      [
        "Cropping",
        "Removing unwanted parts from the start or end of a clip.",
        "Clip အစ/အဆုံးမှ မလိုသောအပိုင်း ဖယ်ရှားခြင်း။"
      ],
      [
        "Splitting",
        "Dividing one clip into two or more parts.",
        "Clip တစ်ခုကို အပိုင်းနှစ်ခု သို့မဟုတ် ထို့ထက်ပို ခွဲခြင်း။"
      ],
      [
        "Splicing",
        "Joining two or more video clips together.",
        "Video clip နှစ်ခု သို့မဟုတ် ထို့ထက်ပို ပေါင်းစပ်ခြင်း။"
      ],
      [
        "Transition",
        "An effect used when moving between clips or scenes.",
        "Clip/Scene တစ်ခုမှ တစ်ခုသို့ ပြောင်းရာတွင် သုံးသော Effect။"
      ],
      [
        "Fade",
        "A transition that gradually appears or disappears.",
        "တဖြည်းဖြည်း ပေါ်လာ/ပျောက်သွားသော Transition။"
      ],
      [
        "Wipe",
        "A transition where one image replaces another across the screen.",
        "မျက်နှာပြင်တစ်ဖက်မှ အခြားပုံကို အစားထိုးသည့် Transition။"
      ],
      [
        "Consent",
        "Permission given by a person before filming or sharing.",
        "ရိုက်ကူး/မျှဝေမီ လူတစ်ဦးထံမှ ရရှိသော ခွင့်ပြုချက်။"
      ]
    ],
    "examples": [
      "A close-up shows a speaker’s expression while a wide shot establishes the classroom.",
      "A beach scene may use waves and birds as natural sound and calm music underneath.",
      "A storyboard uses six numbered boxes to plan a short volcano report.",
      "A fade transition can gently move from the opening title into the first scene."
    ],
    "examplesMy": [
      "Close-up သည် Speaker ၏ မျက်နှာအမူအရာပြပြီး Wide shot သည် စာသင်ခန်းတစ်ခုလုံးကို ပြသည်။",
      "ကမ်းခြေ Scene တွင် လှိုင်း/ငှက်သံကို Natural sound အဖြစ်သုံးပြီး သာယာသော Music ထည့်နိုင်သည်။",
      "Volcano report တိုတစ်ခုကို Storyboard အကွက်ခြောက်ခုဖြင့် စီစဉ်နိုင်သည်။",
      "Fade transition သည် Opening title မှ ပထမ Scene သို့ နူးညံ့စွာ ပြောင်းပေးနိုင်သည်။"
    ],
    "table": {
      "caption": "Video production workflow",
      "headers": [
        "Stage",
        "Main task",
        "Check"
      ],
      "rows": [
        [
          "Plan",
          "Audience, purpose, location, script",
          "Is the idea clear?"
        ],
        [
          "Storyboard",
          "Scenes, shots, action, sound",
          "Is the order logical?"
        ],
        [
          "Shoot",
          "Camera, light, focus, safety",
          "Is footage clear and safe?"
        ],
        [
          "Edit",
          "Crop, split, splice, transitions",
          "Does the sequence flow?"
        ],
        [
          "Review",
          "Watch, correct, export, share",
          "Is it responsible and complete?"
        ]
      ]
    },
    "activities": [
      [
        "Six-scene storyboard",
        "Plan a short school safety video using six numbered frames.",
        "ကျောင်းလုံခြုံရေး Video တိုအတွက် Frame ခြောက်ခုဖြင့် Storyboard ပြုလုပ်ပါ။"
      ],
      [
        "Soundscape design",
        "Write a list of natural sounds, speech and music for three scenes.",
        "Scene သုံးခုအတွက် Natural sound၊ Speech နှင့် Music စာရင်းရေးပါ။"
      ],
      [
        "Shot type practice",
        "Create one close-up and one wide shot of the same safe subject.",
        "လုံခြုံသော Subject တစ်ခုတည်းကို Close-up နှင့် Wide shot တစ်ခုစီ ရိုက်ပါ။"
      ],
      [
        "Edit sequence",
        "Practise cropping, splitting and joining three short clips.",
        "Clip တိုသုံးခုကို Crop၊ Split နှင့် Join လုပ်လေ့ကျင့်ပါ။"
      ],
      [
        "Permission checklist",
        "Prepare a checklist to ensure people and music can be used in your video.",
        "Video ထဲပါသူများနှင့် Music ကို အသုံးပြုခွင့်ရှိမရှိ စစ်ရန် Checklist ပြုလုပ်ပါ။"
      ]
    ],
    "slides": [
      "What is staging?",
      "Frames, shots and scenes",
      "Sound and atmosphere",
      "Text on screen",
      "Storyboards and shot lists",
      "Safe filming techniques",
      "Camera focus and zoom",
      "Editing clips and transitions",
      "Review and export",
      "Privacy, permission and responsible sharing"
    ],
    "essays": [
      [
        "Explain why staging and storyboarding are useful before filming.",
        "Staging plans the location, people, props and camera arrangement. A storyboard shows the scenes in order and helps identify missing shots, sound or text. Both save time and make the video easier to understand.",
        [
          "staging",
          "location",
          "storyboard",
          "scenes",
          "plan"
        ]
      ],
      [
        "Describe the difference between a close-up, wide shot and pan.",
        "A close-up shows a detail or subject closely. A wide shot shows more of the setting. A pan moves the camera horizontally while recording. Each is used to give the viewer different information.",
        [
          "close-up",
          "wide",
          "pan",
          "camera",
          "viewer"
        ]
      ],
      [
        "Explain the difference between cropping, splitting and splicing.",
        "Cropping removes unwanted parts from a clip. Splitting divides a clip into smaller parts. Splicing joins two or more clips together to make a sequence.",
        [
          "cropping",
          "splitting",
          "splicing",
          "clip",
          "sequence"
        ]
      ],
      [
        "Give four ways to make video sharing safe and responsible.",
        "Ask permission before filming or posting people, avoid showing personal details, respect music and image copyright, check the audience and privacy settings, and report harmful content.",
        [
          "permission",
          "personal",
          "copyright",
          "privacy",
          "report"
        ]
      ]
    ]
  },
  {
    "id": 5,
    "title": "Health and safety",
    "myTitle": "ကျန်းမာရေးနှင့် ဘေးကင်းလုံခြုံရေး",
    "range": "Student Book Unit 5 · pp. 182–219",
    "accent": "rose",
    "overview": "Choose suitable computing devices, understand health risks and safe working habits, plan a safety video, examine the environmental effects of digital devices, trace a smartphone life cycle and create a leaflet about reducing e-waste.",
    "overviewMy": "သင့်တော်သော Computing device ရွေးချယ်ခြင်း၊ ကျန်းမာရေးအန္တရာယ်နှင့် လုံခြုံစွာအသုံးပြုနည်း၊ Safety video စီစဉ်ခြင်း၊ Digital device များ၏ ပတ်ဝန်းကျင်အပေါ် သက်ရောက်မှု၊ Smartphone life cycle နှင့် E-waste လျှော့ချရေး Leaflet ဖန်တီးခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Compare desktops, laptops, tablets and smartphones for different tasks.",
        "လုပ်ငန်းအမျိုးမျိုးအတွက် Desktop၊ Laptop၊ Tablet၊ Smartphone များကို နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Identify health risks and describe safe ergonomic working habits.",
        "ကျန်းမာရေးအန္တရာယ်များ ခွဲခြားပြီး Ergonomic လုံခြုံသော လုပ်နည်းများ ဖော်ပြနိုင်ရန်။"
      ],
      [
        "Plan a safety video using clear scenes and practical advice.",
        "Scene ရှင်းလင်းပြီး လက်တွေ့အကြံပြုချက်ပါသော Safety video စီစဉ်နိုင်ရန်။"
      ],
      [
        "Explain the life cycle and environmental impact of digital devices.",
        "Digital device များ၏ Life cycle နှင့် Environmental impact ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Design and present a leaflet encouraging responsible e-waste reduction.",
        "E-waste လျှော့ချရေး တာဝန်ရှိသော လုပ်ဆောင်ချက်များ တိုက်တွန်းသည့် Leaflet ဖန်တီးတင်ပြနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Main features of computing devices",
        "When choosing a computing device, compare features with the task. A desktop may offer a larger screen and more upgrade options; a laptop is portable and can be used in different locations; a tablet is light and uses a touch screen; a smartphone is portable and includes a camera and communication tools. Important specifications include processor or CPU, amount of memory (RAM), storage capacity, connectivity and screen size. The most expensive device is not always the best choice for a particular person.",
        "Computing device ရွေးချယ်ရာတွင် လုပ်ငန်းနှင့် ကိုက်ညီသော Feature များကို နှိုင်းယှဉ်ပါ။ Desktop တွင် Screen ကြီးပြီး Upgrade လုပ်နိုင်မှု ပိုများနိုင်သည်။ Laptop သည် သယ်ဆောင်ရလွယ်သည်။ Tablet သည် ပေါ့ပါးပြီး Touch screen သုံးသည်။ Smartphone တွင် Camera နှင့် ဆက်သွယ်ရေး Tool ပါဝင်သည်။ Processor/CPU၊ RAM၊ Storage capacity၊ Connectivity နှင့် Screen size တို့ကို စဉ်းစားပါ။ ဈေးအကြီးဆုံးစက်သည် လူတိုင်းအတွက် အကောင်းဆုံးမဟုတ်ပါ။",
        "Describe the user’s task → compare device types → check CPU, RAM, storage, connectivity and screen size → list one advantage and disadvantage → recommend a device.",
        "အသုံးပြုသူ၏ လုပ်ငန်းသတ်မှတ်ပါ → Device အမျိုးအစားများ နှိုင်းယှဉ်ပါ → CPU၊ RAM၊ Storage၊ Connectivity၊ Screen size စစ်ပါ → အားသာချက်/အားနည်းချက်ရေးပါ → Device အကြံပြုပါ။"
      ],
      [
        "Can you get an injury from using digital devices?",
        "Long or unsuitable device use can cause eye strain, back and neck pain, shoulder discomfort and repetitive strain injury (RSI) in the wrists or hands. Risk can increase when the monitor is at the wrong height, the user sits without back support or the keyboard and mouse are too far away. Take regular breaks, change position, use suitable lighting and place the screen near eye level. Report persistent pain to a responsible adult.",
        "Digital device ကို အချိန်ကြာကြာ သို့မဟုတ် မသင့်တော်သောပုံစံဖြင့် သုံးပါက မျက်စိပင်ပန်းခြင်း၊ ကျော/လည်ပင်းနာခြင်း၊ ပခုံးနာခြင်းနှင့် လက်ကောက်ဝတ်/လက်တွင် RSI ဖြစ်နိုင်သည်။ Monitor အမြင့်မမှန်ခြင်း၊ ကျောမထောက်ဘဲ ထိုင်ခြင်း၊ Keyboard/Mouse ဝေးလွန်းခြင်းတို့က အန္တရာယ်တိုးစေသည်။ ပုံမှန်အနားယူပါ၊ ကိုယ်ဟန်ပြောင်းပါ၊ အလင်းရောင်သင့်တော်စေပြီး Screen ကို မျက်လုံးအမြင့်အနီးထားပါ။ နာကျင်မှုဆက်ရှိပါက လူကြီးတစ်ဦးကို ပြောပါ။",
        "Check chair and back support → place screen near eye level → position keyboard and mouse comfortably → take regular breaks → stretch and change posture.",
        "ထိုင်ခုံနှင့် ကျောထောက်ကို စစ်ပါ → Screen ကို မျက်လုံးအမြင့်အနီးထားပါ → Keyboard/Mouse ကို သက်တောင့်သက်သာထားပါ → ပုံမှန်အနားယူပါ → ကိုယ်ဟန်ပြောင်းပြီး ဆန့်တန်းပါ။"
      ],
      [
        "Making a video about using digital devices safely · Part 1",
        "A safety video should give practical advice for using a desktop, tablet or laptop. For a desktop, sit with the back supported and keep the monitor at a comfortable height. For a tablet, avoid holding it up for long periods and take breaks. For a laptop, use it on a stable surface, keep the screen at a suitable angle and avoid trailing cables. The advice should match the device and the situation being shown.",
        "Safety video တွင် Desktop၊ Tablet၊ Laptop အသုံးပြုရာ လက်တွေ့အကြံပြုချက်များ ပေးသင့်သည်။ Desktop အသုံးပြုရာတွင် ကျောထောက်ရှိပြီး Monitor ကို သက်တောင့်သက်သာ အမြင့်ထားပါ။ Tablet ကို အချိန်ကြာကြာ လက်မြှောက်ကိုင်မထားဘဲ အနားယူပါ။ Laptop ကို တည်ငြိမ်သော မျက်နှာပြင်ပေါ်ထားပြီး Screen angle သင့်တော်စေကာ ကြိုးများ လမ်းကြောင်းမပိတ်စေရန် စီပါ။",
        "Choose the device → identify likely risks → write a short safe-use message → plan the scene → show the recommended posture or action.",
        "Device ရွေးပါ → ဖြစ်နိုင်သော အန္တရာယ်သတ်မှတ်ပါ → Safe-use message တိုတောင်းရေးပါ → Scene စီစဉ်ပါ → သင့်တော်သော ကိုယ်ဟန်/လုပ်ဆောင်ချက် ပြပါ။"
      ],
      [
        "Making a video about using digital devices safely · Part 2",
        "A short safety video should combine clear visuals and concise messages. Use a storyboard to show the unsafe method and the safer alternative. Filming should itself be safe: keep cables out of walkways, use a stable tripod, check the equipment and ask permission before showing people. Text and voice-over can highlight key advice. Review the footage to ensure the message is accurate and easy for the target audience to follow.",
        "Safety video တိုတစ်ခုတွင် ရှင်းလင်းသော Visual နှင့် တိုတောင်းသော Message များ ပေါင်းစပ်သင့်သည်။ မလုံခြုံသော နည်းလမ်းနှင့် ပိုလုံခြုံသော အစားထိုးနည်းကို Storyboard ဖြင့် ပြပါ။ ကိုယ်တိုင်ရိုက်ကူးရာတွင်လည်း ကြိုးများ လမ်းမပိတ်စေရန်၊ Tripod တည်ငြိမ်စေရန်၊ ပစ္စည်းစစ်ရန်နှင့် လူများပါဝင်ပါက ခွင့်ပြုချက်ယူရန် လိုအပ်သည်။ Text/Voice-over ဖြင့် အရေးကြီးသော အကြံပြုချက်ကို အလေးပေးနိုင်သည်။",
        "Make a two-column safe/unsafe storyboard → add short captions → film safely → review the accuracy → share with the intended audience.",
        "Safe/Unsafe နှစ်ကော်လံ Storyboard ပြုလုပ်ပါ → Caption တိုတိုထည့်ပါ → လုံခြုံစွာ ရိုက်ကူးပါ → မှန်ကန်မှုစစ်ပါ → သတ်မှတ် Audience ထံ မျှဝေပါ။"
      ],
      [
        "Digital devices and the environment",
        "Devices require raw materials, energy and manufacturing processes. Mining and processing materials can affect the environment. Manufacturing, packaging, transport, electricity use and disposal also have impacts. Recycling tries to recover materials for new products; refurbishing repairs and cleans a device so it can be used again. E-waste is electronic waste from devices that are unwanted or no longer usable. Throwing electronics into landfill can release harmful materials and waste valuable resources.",
        "Device များတွင် Raw material၊ Energy နှင့် Manufacturing process လိုအပ်သည်။ သတ္တုတူးဖော်ခြင်းနှင့် ပြုပြင်ထုတ်လုပ်ခြင်းက ပတ်ဝန်းကျင်ကို သက်ရောက်စေနိုင်သည်။ ထုတ်လုပ်ခြင်း၊ ထုပ်ပိုးခြင်း၊ သယ်ယူပို့ဆောင်ခြင်း၊ လျှပ်စစ်သုံးခြင်းနှင့် စွန့်ပစ်ခြင်းတို့လည်း သက်ရောက်မှုရှိသည်။ Recycling သည် ပစ္စည်းပြန်ရယူပြီး ထုတ်ကုန်အသစ်ပြုလုပ်ခြင်း၊ Refurbishing သည် Device ကို ပြုပြင်သန့်ရှင်းကာ ပြန်သုံးနိုင်စေခြင်းဖြစ်သည်။ E-waste သည် မလိုအပ်တော့သော သို့မဟုတ် အသုံးမဝင်တော့သော အီလက်ထရောနစ်စွန့်ပစ်ပစ္စည်းဖြစ်သည်။",
        "List the materials and energy a device needs → trace where it is manufactured and used → identify disposal risks → suggest reuse, repair or recycling.",
        "Device လိုအပ်သော Material/Energy စာရင်းလုပ်ပါ → ထုတ်လုပ်/အသုံးပြုရာ လမ်းကြောင်းလိုက်ပါ → စွန့်ပစ်မှုအန္တရာယ် သတ်မှတ်ပါ → Reuse/Repair/Recycle အကြံပြုပါ။"
      ],
      [
        "The life cycle of a smartphone",
        "The life cycle of a smartphone can be described in stages: locating and mining materials, processing and manufacturing, packaging and selling, use, and finally disposal or recycling. Each stage uses resources and may create waste or pollution. A longer useful life can reduce the demand for new materials. Repairing a device, protecting it from damage and choosing a refurbished phone can reduce environmental impact.",
        "Smartphone ၏ Life cycle ကို အဆင့်များဖြင့် ဖော်ပြနိုင်သည်—ပစ္စည်းရှာဖွေ/တူးဖော်ခြင်း၊ Processing နှင့် Manufacturing၊ Packaging နှင့် Selling၊ အသုံးပြုခြင်း၊ နောက်ဆုံး စွန့်ပစ်ခြင်း သို့မဟုတ် Recycling လုပ်ခြင်း။ အဆင့်တိုင်းတွင် Resource သုံးစွဲပြီး Waste/Pollution ဖြစ်နိုင်သည်။ Device ကို ကြာကြာသုံးခြင်းသည် ပစ္စည်းအသစ်လိုအပ်ချက် လျှော့ချနိုင်သည်။ ပြုပြင်ခြင်း၊ ပျက်စီးမှုကာကွယ်ခြင်းနှင့် Refurbished phone ရွေးခြင်းတို့က ပတ်ဝန်းကျင်ထိခိုက်မှု လျှော့နိုင်သည်။",
        "Put the five life-cycle stages in order → add one resource or impact at each stage → mark where reuse or recycling can happen.",
        "Life-cycle အဆင့်ငါးဆင့်ကို အစီအစဉ်တကျထားပါ → အဆင့်တိုင်း၏ Resource/Impact တစ်ခုစီထည့်ပါ → Reuse/Recycle လုပ်နိုင်သော နေရာများမှတ်ပါ။"
      ],
      [
        "Reducing e-waste",
        "E-waste can be reduced by using devices for longer, repairing broken parts, donating or selling working devices, buying refurbished products, recycling correctly and avoiding unnecessary upgrades. Protect devices with cases and careful handling. Cloud storage and streaming may reduce the need to own multiple storage devices or physical media, although they still use energy. Explain the environmental benefit of each action, such as less mining, less landfill waste or lower energy use.",
        "E-waste ကို Device ကြာကြာသုံးခြင်း၊ ပျက်နေသောအစိတ်အပိုင်းပြုပြင်ခြင်း၊ အလုပ်လုပ်သေးသော Device ကို လှူ/ရောင်းခြင်း၊ Refurbished product ဝယ်ခြင်း၊ မှန်ကန်စွာ Recycling လုပ်ခြင်းနှင့် မလိုအပ်သော Upgrade များရှောင်ခြင်းဖြင့် လျှော့ချနိုင်သည်။ Case သုံးပြီး သေချာကိုင်တွယ်ပါ။ Cloud storage/Streaming သည် Physical storage/media အများကြီးဝယ်ရန် လိုအပ်မှုလျှော့နိုင်သော်လည်း Energy သုံးစွဲမှုရှိနေဆဲဖြစ်သည်။ Action တစ်ခုစီ၏ Environmental benefit ကို ရှင်းပြပါ။",
        "Check whether a device can be repaired → donate or sell working devices → find an approved recycling point → explain how this reduces waste or mining.",
        "Device ပြုပြင်နိုင်/မနိုင် စစ်ပါ → အလုပ်လုပ်သော Device လှူ/ရောင်းပါ → ခွင့်ပြုထားသော Recycling နေရာရှာပါ → Waste/Mining လျှော့ပုံ ရှင်းပြပါ။"
      ],
      [
        "Planning a leaflet about e-waste",
        "A leaflet is a short publication designed to communicate information clearly. Before designing, identify the audience and the main message. Plan a title, short sections, headings, key facts, images and a call to action. Collect accurate facts about e-waste and choose language that is suitable for the reader. A mind map can help gather ideas before selecting the most important points.",
        "Leaflet သည် အချက်အလက်ကို ရှင်းလင်းစွာ ပေးပို့ရန် ပြုလုပ်သော စာစောင်တိုဖြစ်သည်။ မဖန်တီးမီ Audience နှင့် အဓိက Message သတ်မှတ်ပါ။ Title၊ အပိုင်းတိုများ၊ Heading၊ အရေးကြီးသော Fact၊ ပုံများနှင့် Call to action စီစဉ်ပါ။ E-waste အကြောင်း မှန်ကန်သော Fact များစုဆောင်းပြီး ဖတ်သူနှင့် ကိုက်ညီသော ဘာသာစကားရွေးပါ။ Mind map ဖြင့် အကြံဉာဏ်များ စုစည်းနိုင်သည်။",
        "Define audience and purpose → brainstorm keywords → create a mind map → choose a title and sections → collect accurate facts and images.",
        "Audience နှင့် ရည်ရွယ်ချက်သတ်မှတ်ပါ → Keyword များ စဉ်းစားပါ → Mind map ဖန်တီးပါ → Title/Section ရွေးပါ → မှန်ကန်သော Fact နှင့် ပုံများစုဆောင်းပါ။"
      ],
      [
        "Designing the leaflet layout",
        "Use a clear visual hierarchy so readers notice the title and most important advice first. Choose readable fonts, consistent colours and suitable images. Text-wrap can position text around an image in a desktop publishing or word-processing application. Do not fill every space with text. Keep paragraphs short, use captions for images and leave enough white space. Make sure the layout is balanced and that the message can be understood quickly.",
        "Visual hierarchy ကို ရှင်းလင်းစွာထားပါ၊ ဖတ်သူသည် Title နှင့် အရေးကြီးဆုံး အကြံပြုချက်ကို အရင်မြင်စေရမည်။ ဖတ်ရလွယ်သော Font၊ တစ်သမတ်တည်း Colour နှင့် သင့်တော်သော Image ရွေးပါ။ Desktop publishing/Word processing တွင် Text-wrap ဖြင့် ပုံဘေးပတ်လည် စာသားနေရာချနိုင်သည်။ နေရာအားလုံးကို စာဖြင့် မဖြည့်ပါနှင့်။ Paragraph တိုတို၊ Caption နှင့် White space လုံလောက်စွာထားပါ။",
        "Choose page size → place the title → arrange headings and images → apply text-wrap → check spacing, font size and contrast.",
        "Page size ရွေးပါ → Title ထားပါ → Heading နှင့် Image စီပါ → Text-wrap အသုံးပြုပါ → Spacing၊ Font size နှင့် Contrast စစ်ပါ။"
      ],
      [
        "Completing and presenting the leaflet",
        "Proofread the leaflet for spelling, facts and consistent formatting. Ask someone from the target audience to read it and explain what they understood. Improve any confusing wording or crowded sections. When presenting, explain the main problem, the actions readers can take and where to find more information. A strong final message asks the audience to do something realistic, such as repair, donate or recycle an unwanted device.",
        "Leaflet ကို စာလုံးပေါင်း၊ Fact နှင့် Format တစ်သမတ်တည်းဖြစ်မှု စစ်ဆေးပါ။ Target audience ထဲမှ တစ်ဦးကို ဖတ်ခိုင်းပြီး ဘာနားလည်သလဲ မေးပါ။ မရှင်းသော စာသားနှင့် ပြည့်ကျပ်သော အပိုင်းများ ပြင်ဆင်ပါ။ တင်ပြရာတွင် ပြဿနာ၊ ဖတ်သူလုပ်ဆောင်နိုင်သော Action နှင့် အချက်အလက်ထပ်ရှာနိုင်ရာကို ရှင်းပြပါ။ Repair၊ Donate သို့မဟုတ် Recycle ကဲ့သို့ လက်တွေ့ကျသော Call to action ထည့်ပါ။",
        "Proofread → ask a reader for feedback → improve unclear parts → present the key message → invite a practical action.",
        "စာပြန်စစ်ပါ → ဖတ်သူထံ Feedback ယူပါ → မရှင်းသောအပိုင်းများ ပြင်ပါ → အဓိက Message တင်ပြပါ → လက်တွေ့လုပ်ဆောင်မှု တိုက်တွန်းပါ။"
      ]
    ],
    "terms": [
      [
        "Computing device",
        "An electronic device used to process or communicate information.",
        "အချက်အလက်လုပ်ဆောင်/ဆက်သွယ်ရန် အသုံးပြုသော အီလက်ထရောနစ်စက်။"
      ],
      [
        "Desktop computer",
        "A computer designed to be used at a desk.",
        "စားပွဲပေါ်တွင် အသုံးပြုရန် ဒီဇိုင်းလုပ်ထားသော ကွန်ပျူတာ။"
      ],
      [
        "Laptop",
        "A portable computer with an integrated screen and keyboard.",
        "Screen/Keyboard ပေါင်းစပ်ပါဝင်သော သယ်ဆောင်နိုင်သည့် ကွန်ပျူတာ။"
      ],
      [
        "Tablet",
        "A portable touch-screen computing device.",
        "Touch screen ပါသော သယ်ဆောင်နိုင်သည့် ကွန်ပျူတာ။"
      ],
      [
        "Smartphone",
        "A mobile phone with computing and internet features.",
        "Computing နှင့် Internet feature များပါသော မိုဘိုင်းဖုန်း။"
      ],
      [
        "CPU",
        "The central processing unit that carries out instructions.",
        "Instruction များကို လုပ်ဆောင်သော Central processing unit။"
      ],
      [
        "Processor",
        "The component that performs processing tasks.",
        "Processing လုပ်ငန်းများ ဆောင်ရွက်သော အစိတ်အပိုင်း။"
      ],
      [
        "RAM",
        "Temporary working memory used while programs run.",
        "Program လုပ်ဆောင်နေစဉ် ယာယီအသုံးပြုသော Memory။"
      ],
      [
        "Storage capacity",
        "How much data a device can store.",
        "Device တစ်ခုက Data မည်မျှ သိမ်းနိုင်သည်ဆိုသော ပမာဏ။"
      ],
      [
        "Connectivity",
        "The ways a device can connect to networks or other devices.",
        "Device များ Network/အခြားစက်များနှင့် ချိတ်ဆက်နိုင်သည့် နည်းလမ်းများ။"
      ],
      [
        "Touch screen",
        "A screen that detects touch as an input.",
        "ထိတွေ့မှုကို Input အဖြစ် သိရှိသော Screen။"
      ],
      [
        "Ergonomics",
        "Designing equipment and workspaces to fit people safely.",
        "လူနှင့် သင့်တော်ပြီး လုံခြုံစေရန် ပစ္စည်း/လုပ်ငန်းနေရာ ဒီဇိုင်းပြုလုပ်ခြင်း။"
      ],
      [
        "Posture",
        "The way a person holds their body when sitting or standing.",
        "ထိုင်/ရပ်နေစဉ် ကိုယ်ခန္ဓာထားပုံ။"
      ],
      [
        "RSI",
        "Repetitive strain injury caused by repeated movement or poor positioning.",
        "ထပ်ခါတလဲလဲ လှုပ်ရှားမှု/အနေအထားမမှန်မှုကြောင့် ဖြစ်သော Repetitive strain injury။"
      ],
      [
        "Eye strain",
        "Discomfort or tiredness caused by prolonged or unsuitable viewing.",
        "အချိန်ကြာကြာ/မသင့်တော်စွာ ကြည့်ခြင်းကြောင့် မျက်စိပင်ပန်းခြင်း။"
      ],
      [
        "Screen time",
        "Time spent using a device with a screen.",
        "Screen ပါသော Device သုံးစွဲသည့် အချိန်။"
      ],
      [
        "Workstation",
        "The desk, chair and equipment used for computer work.",
        "ကွန်ပျူတာအလုပ်အတွက် စားပွဲ၊ ထိုင်ခုံနှင့် ပစ္စည်းများ။"
      ],
      [
        "Monitor",
        "A screen displaying computer output.",
        "ကွန်ပျူတာ Output ကို ပြသသော မျက်နှာပြင်။"
      ],
      [
        "Keyboard",
        "An input device with keys used to enter text and commands.",
        "စာသား/Command ထည့်ရန် Key များပါသော Input device။"
      ],
      [
        "Mouse",
        "A pointing device used to control a pointer.",
        "Pointer ထိန်းချုပ်ရန် အသုံးပြုသော Pointing device။"
      ],
      [
        "Hazard",
        "Something that may cause harm or injury.",
        "ထိခိုက်မှု/ဒဏ်ရာ ဖြစ်စေနိုင်သော အန္တရာယ်အချက်။"
      ],
      [
        "Trip hazard",
        "An object or cable that someone may catch their foot on.",
        "ခြေထောက်ချိတ်မိနိုင်သော ပစ္စည်း/ကြိုး အန္တရာယ်။"
      ],
      [
        "Recycling",
        "Processing used materials to make new products.",
        "အသုံးပြုပြီးသော ပစ္စည်းများကို ပြန်လည်ထုတ်လုပ်ခြင်း။"
      ],
      [
        "Refurbishing",
        "Repairing and cleaning a device so it can be used again.",
        "Device ကို ပြုပြင်သန့်ရှင်းပြီး ပြန်အသုံးပြုနိုင်စေခြင်း။"
      ],
      [
        "E-waste",
        "Discarded electronic devices or electronic parts.",
        "စွန့်ပစ်ထားသော အီလက်ထရောနစ်စက်/အစိတ်အပိုင်းများ။"
      ],
      [
        "Landfill",
        "A place where waste is buried or stored.",
        "အမှိုက်များ မြှုပ်နှံ/စုပုံထားသော နေရာ။"
      ],
      [
        "Raw material",
        "A natural resource used to manufacture a product.",
        "ထုတ်ကုန်ထုတ်လုပ်ရန် အသုံးပြုသော သဘာဝကုန်ကြမ်း။"
      ],
      [
        "Life cycle",
        "The stages a product goes through from materials to disposal.",
        "ကုန်ကြမ်းမှ စွန့်ပစ်သည်အထိ ထုတ်ကုန်ဖြတ်သန်းသော အဆင့်များ။"
      ],
      [
        "Manufacturing",
        "Making products from processed materials.",
        "ပြုပြင်ထားသော ကုန်ကြမ်းများမှ ထုတ်ကုန်ထုတ်လုပ်ခြင်း။"
      ],
      [
        "Repair",
        "Fixing a device or component so it works again.",
        "Device/အစိတ်အပိုင်းကို ပြန်အလုပ်လုပ်စေရန် ပြုပြင်ခြင်း။"
      ],
      [
        "Reuse",
        "Using a product again instead of discarding it.",
        "ပစ္စည်းတစ်ခုကို မစွန့်ပစ်ဘဲ ထပ်မံအသုံးပြုခြင်း။"
      ],
      [
        "Donation",
        "Giving a usable item to another person or organisation.",
        "အသုံးပြုနိုင်သောပစ္စည်းကို အခြားသူ/အဖွဲ့ထံ ပေးလှူခြင်း။"
      ],
      [
        "Text-wrap",
        "A layout tool that positions text around an image.",
        "ပုံပတ်လည်တွင် စာသားနေရာချသော Layout tool။"
      ],
      [
        "Leaflet",
        "A short publication designed to inform or persuade readers.",
        "ဖတ်သူကို အသိပေး/ဆွဲဆောင်ရန် ပြုလုပ်သော စာစောင်တို။"
      ],
      [
        "Call to action",
        "A clear request asking the audience to do something.",
        "ပရိသတ်အား တစ်စုံတစ်ခု လုပ်ဆောင်ရန် ရှင်းလင်းသော တိုက်တွန်းချက်။"
      ]
    ],
    "examples": [
      "A mobile worker may choose a laptop because it can be carried from site to site.",
      "A monitor placed too low can encourage neck strain; raising it can improve posture.",
      "Repairing and donating a working device can extend its useful life.",
      "A leaflet can use a large heading, short text and a recycling image to encourage action."
    ],
    "examplesMy": [
      "နေရာအမျိုးမျိုးသွားရသော အလုပ်သမားသည် သယ်ဆောင်နိုင်သော Laptop ရွေးနိုင်သည်။",
      "Monitor နိမ့်လွန်းပါက လည်ပင်းတင်းကျပ်နိုင်ပြီး မြှင့်ထားခြင်းက ကိုယ်ဟန်ကောင်းစေသည်။",
      "အလုပ်လုပ်နေသော Device ကို ပြုပြင်လှူဒါန်းခြင်းက အသုံးပြုနိုင်သည့်ကာလ တိုးစေသည်။",
      "Leaflet တွင် ခေါင်းစဉ်ကြီး၊ စာတိုနှင့် Recycling ပုံကိုသုံး၍ လုပ်ဆောင်ရန် တိုက်တွန်းနိုင်သည်။"
    ],
    "table": {
      "caption": "Smartphone product life cycle",
      "headers": [
        "Stage",
        "Activity",
        "Possible impact"
      ],
      "rows": [
        [
          "1. Materials",
          "Locate and mine materials",
          "Resource use and land disturbance"
        ],
        [
          "2. Manufacturing",
          "Process materials and assemble phone",
          "Energy use and production waste"
        ],
        [
          "3. Packaging and selling",
          "Package, transport and sell",
          "Materials and transport emissions"
        ],
        [
          "4. In use",
          "Charge, repair and update",
          "Electricity and replacement parts"
        ],
        [
          "5. Disposal",
          "Reuse, refurbish or recycle",
          "Waste reduction or landfill risk"
        ]
      ]
    },
    "activities": [
      [
        "Device recommendation",
        "Choose a device for three user scenarios and explain the feature, advantage and disadvantage.",
        "အသုံးပြုသူအခြေအနေသုံးမျိုးအတွက် Device ရွေးပြီး Feature၊ အားသာချက်နှင့် အားနည်းချက်ရေးပါ။"
      ],
      [
        "Ergonomic workstation",
        "Draw a safe desk layout showing screen, chair, keyboard and mouse positions.",
        "Screen၊ Chair၊ Keyboard၊ Mouse တည်နေရာပြသထားသော လုံခြုံသည့် စားပွဲပုံစံဆွဲပါ။"
      ],
      [
        "Safety video plan",
        "Create a short storyboard showing one unsafe habit and a safer alternative.",
        "မလုံခြုံသော အလေ့အကျင့်တစ်ခုနှင့် ပိုလုံခြုံသော အစားထိုးနည်း ပြသသော Storyboard တို ဖန်တီးပါ။"
      ],
      [
        "Life-cycle map",
        "Draw the five stages of a smartphone life cycle and add one impact to each.",
        "Smartphone life cycle အဆင့်ငါးဆင့် ဆွဲပြီး တစ်ဆင့်စီတွင် သက်ရောက်မှုတစ်ခု ထည့်ပါ။"
      ],
      [
        "E-waste leaflet",
        "Design a one-page leaflet with three practical ways to reduce electronic waste.",
        "အီလက်ထရောနစ်အမှိုက် လျှော့ချနည်း လက်တွေ့သုံးခုပါသော စာမျက်နှာတစ်မျက်နှာ Leaflet ဖန်တီးပါ။"
      ]
    ],
    "slides": [
      "Choosing the right computing device",
      "Device features and specifications",
      "Health risks from device use",
      "Ergonomics and safe posture",
      "Planning a digital safety video",
      "Environment and electronic waste",
      "Smartphone life cycle",
      "Reuse, repair, refurbish and recycle",
      "Leaflet planning and layout",
      "Presenting a call to action"
    ],
    "essays": [
      [
        "A mobile worker needs to complete forms at different locations. Recommend a device and explain its advantages and disadvantages.",
        "A laptop is suitable because it is portable and has a keyboard and screen for completing forms. It can be carried between sites. A disadvantage is that the battery can run out and it may be damaged during travel.",
        [
          "laptop",
          "portable",
          "keyboard",
          "battery",
          "disadvantage"
        ]
      ],
      [
        "Explain three ways to reduce the risk of injury when using a computer.",
        "Use a chair that supports the back, keep the monitor near eye level, place the keyboard and mouse comfortably, take regular breaks and change posture. These actions reduce eye, neck, back and wrist strain.",
        [
          "back",
          "monitor",
          "keyboard",
          "breaks",
          "posture"
        ]
      ],
      [
        "Describe the five stages in the life cycle of a smartphone.",
        "The stages are locating and mining materials, processing and manufacturing, packaging and selling, use, and disposal or recycling. Each stage uses resources or creates possible environmental effects.",
        [
          "mining",
          "manufacturing",
          "packaging",
          "use",
          "recycling"
        ]
      ],
      [
        "Give four practical actions that help reduce e-waste and explain why they help.",
        "Repair devices, protect them from damage, donate or sell working devices, buy refurbished devices and recycle broken electronics correctly. These actions extend product life, reduce landfill waste and lower demand for new raw materials.",
        [
          "repair",
          "donate",
          "refurbished",
          "recycle",
          "landfill"
        ]
      ]
    ]
  },
  {
    "id": 6,
    "title": "Programming (part 2)",
    "myTitle": "Programming (အပိုင်း ၂)",
    "range": "Student Book Unit 6 · pp. 222–255",
    "accent": "violet",
    "overview": "Repurpose and test algorithms, create loops and variables, programme a timer, draw 2D shapes with the Scratch Pen extension, use coordinates to position shapes and combine simple shapes to represent objects.",
    "overviewMy": "Algorithm များကို ပြန်အသုံးချ/စမ်းသပ်ခြင်း၊ Loop နှင့် Variable များဖန်တီးခြင်း၊ Timer Program ရေးခြင်း၊ Scratch Pen extension ဖြင့် 2D shape ဆွဲခြင်း၊ Coordinate ဖြင့် Shape များနေရာချခြင်းနှင့် ရိုးရှင်းသော Shape များပေါင်း၍ Object ဖော်ပြခြင်းတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Repurpose an algorithm by changing only the required instructions.",
        "လိုအပ်သော Instruction များကိုသာ ပြောင်း၍ Algorithm ပြန်အသုံးချနိုင်ရန်။"
      ],
      [
        "Use REPEAT and REPEAT UNTIL loops to simplify repeated actions.",
        "ထပ်ခါတလဲလဲလုပ်ဆောင်မှုကို ရိုးရှင်းစေရန် REPEAT/REPEAT UNTIL Loop သုံးနိုင်ရန်။"
      ],
      [
        "Use variables, input and output in an algorithm.",
        "Algorithm တွင် Variable၊ Input နှင့် Output အသုံးပြုနိုင်ရန်။"
      ],
      [
        "Create and test a countdown timer.",
        "Countdown timer တစ်ခု ဖန်တီးစမ်းသပ်နိုင်ရန်။"
      ],
      [
        "Calculate angles and use coordinates to draw 2D shapes.",
        "Angle တွက်ချက်ပြီး Coordinate ဖြင့် 2D shape ဆွဲနိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Designing, testing and repurposing an algorithm",
        "Repurposing an algorithm means changing only the instructions needed to meet a new requirement while keeping the parts that still work. Before editing, identify the original purpose, the new condition and the commands affected. Variables store values such as names, colours or scores. Test each change after making it. A small, careful change is easier to debug than rewriting the whole algorithm.",
        "Algorithm ကို ပြန်လည်အသုံးချခြင်း (Repurposing) ဆိုသည်မှာ လိုအပ်ချက်အသစ်နှင့် ကိုက်ညီရန် လိုအပ်သော Instruction များကိုသာ ပြင်ပြီး အလုပ်လုပ်နေသော အပိုင်းများကို ဆက်ထိန်းခြင်းဖြစ်သည်။ မပြင်မီ မူလရည်ရွယ်ချက်၊ Condition အသစ်နှင့် သက်ဆိုင်သော Command များကို ရှာပါ။ Variable သည် အမည်၊ အရောင်၊ အမှတ်ကဲ့သို့ Value များကို သိမ်းသည်။ ပြောင်းလဲမှုတစ်ခုပြီးတိုင်း စမ်းပါ။",
        "Read the original algorithm → identify the new condition → mark only the affected lines → make the change → test the result.",
        "မူလ Algorithm ဖတ်ပါ → Condition အသစ်သတ်မှတ်ပါ → ပြင်ရမည့် Line များသာ မှတ်ပါ → ပြောင်းလဲပါ → ရလဒ်စမ်းပါ။"
      ],
      [
        "Creating an algorithm using loops",
        "Repeated actions can be expressed with REPEAT or REPEAT UNTIL commands. For a fence-painting task, the same steps—dip the brush, remove excess paint and paint one panel—are repeated for each panel. A REPEAT 4 loop is suitable when there are exactly four panels. REPEAT UNTIL is useful when the number of repetitions depends on a condition, such as continuing until all panels are painted.",
        "ထပ်ခါတလဲလဲ လုပ်ဆောင်ရသော အရာများကို REPEAT သို့မဟုတ် REPEAT UNTIL ဖြင့် ဖော်ပြနိုင်သည်။ ခြံစည်းရိုးဆေးသုတ်ရာတွင် Brush နှစ်ခြင်း၊ ပိုနေသောဆေးဖယ်ခြင်း၊ Panel တစ်ခုသုတ်ခြင်းတို့ကို Panel တစ်ခုစီအတွက် ထပ်လုပ်ရသည်။ Panel လေးခုတိတိရှိလျှင် REPEAT 4 သင့်တော်သည်။ အကြိမ်ရေသည် Condition အပေါ် မူတည်လျှင် REPEAT UNTIL သုံးနိုင်သည်။",
        "Find the repeated steps → choose a fixed repeat count or stopping condition → write the loop → check the loop ends at the correct time.",
        "ထပ်လုပ်ရမည့် အဆင့်များရှာပါ → အကြိမ်ရေ သတ်မှတ်ထားသလား/ရပ်မည့် Condition ရှိသလား ရွေးပါ → Loop ရေးပါ → မှန်ကန်သောအချိန်တွင် ရပ်ကြောင်း စစ်ပါ။"
      ],
      [
        "Programming an algorithm that contains variables",
        "A variable stores a value that may be used or changed while a program runs. A journey-time algorithm might ask for a speed and distance, store them in variables and calculate time by dividing distance by speed. INPUT collects a value from the user; DISPLAY shows a result. Choose meaningful variable names and make sure the units match—for example, kilometres divided by kilometres per hour gives hours.",
        "Variable သည် Program လုပ်ဆောင်နေစဉ် အသုံးပြု/ပြောင်းလဲနိုင်သော Value သိမ်းဆည်းသည်။ ခရီးချိန် Algorithm တစ်ခုတွင် Speed နှင့် Distance ကို User ထံမှ မေးပြီး Variable ထဲသိမ်းကာ Distance ကို Speed ဖြင့်စား၍ Time တွက်နိုင်သည်။ INPUT သည် User ထံမှ Value ရယူပြီး DISPLAY သည် ရလဒ်ပြသည်။ အဓိပ္ပာယ်ရှိသော Variable name သုံးပြီး Unit များကိုက်ညီစေရမည်—km ÷ km/h သည် hour ဖြစ်သည်။",
        "Choose variable names → ask for input → store the values → calculate the result → display it with the correct unit.",
        "Variable name ရွေးပါ → Input မေးပါ → Value သိမ်းပါ → ရလဒ်တွက်ပါ → မှန်ကန်သော Unit ဖြင့် Display လုပ်ပါ။"
      ],
      [
        "Repurposing an algorithm",
        "A program designed for one task can often be adapted to another by changing names, inputs and calculations. For example, a sports-club program that calculates total money raised can be changed to calculate average attendance at a swimming pool. Set variables to zero at the start so previous values are not included. Rename variables to match the new task and remove any blocks that are no longer needed.",
        "လုပ်ငန်းတစ်ခုအတွက် ရေးထားသော Program ကို အမည်၊ Input နှင့် Calculation များ ပြောင်း၍ အခြားလုပ်ငန်းအတွက် ပြန်အသုံးချနိုင်သည်။ ဥပမာ Sports club အတွက် စုဆောင်းငွေတွက်သော Program ကို Swimming pool ၏ ပျမ်းမျှတက်ရောက်သူတွက်ရန် ပြောင်းနိုင်သည်။ ယခင်တန်ဖိုးများ မပါစေရန် Variable များကို အစတွင် သုညထားပါ။ Variable name များကို လုပ်ငန်းအသစ်နှင့် ကိုက်ညီအောင် ပြောင်းပြီး မလိုသော Block များဖယ်ပါ။",
        "Compare old and new task → rename variables → reset starting values → change the calculation → remove unused blocks → test sample inputs.",
        "မူလနှင့် လုပ်ငန်းအသစ် နှိုင်းယှဉ်ပါ → Variable name ပြောင်းပါ → Start value reset လုပ်ပါ → Calculation ပြောင်းပါ → မသုံးသော Block ဖယ်ပါ → Sample input ဖြင့် စမ်းပါ။"
      ],
      [
        "Programming a countdown timer · Part 1",
        "A countdown timer stores the remaining time in a variable. Set the timer to its starting value, then repeat the timer steps: wait for one second and change the timer by −1. The wait block matters because it creates a pause between values. Without it, the timer may reach zero almost immediately. A clear start event and a reset step make the timer ready for another run.",
        "Countdown timer သည် ကျန်ရှိသော အချိန်ကို Variable ထဲတွင် သိမ်းသည်။ Timer ကို စတင်တန်ဖိုးသတ်မှတ်ပြီး Timer အဆင့်များကို ထပ်လုပ်သည်—တစ်စက္ကန့်စောင့်ပြီး Timer ကို −1 ပြောင်းသည်။ Wait block သည် တန်ဖိုးတစ်ခုနှင့် တစ်ခုအကြား ခဏရပ်စေသောကြောင့် အရေးကြီးသည်။ ၎င်းမရှိလျှင် Timer သည် ချက်ချင်း သုညရောက်သွားနိုင်သည်။ Start event နှင့် Reset အဆင့်ကို ထည့်ပါ။",
        "Set the timer variable → start when the flag is clicked → repeat wait 1 second and change by −1 → stop when zero → display the result.",
        "Timer Variable သတ်မှတ်ပါ → Flag နှိပ်ချိန် စတင်ပါ → ၁ စက္ကန့်စောင့်ပြီး −1 ပြောင်းပါ → သုညရောက်လျှင် ရပ်ပါ → ရလဒ်ပြပါ။"
      ],
      [
        "Programming a countdown timer · Part 2",
        "A timer can be repurposed to count up by changing the starting value and the direction of the variable change. A message can be displayed when the timer reaches the target. A variable’s display checkbox can show or hide its value on the Scratch stage. Test the timer with a short value first, then test the reset and completion message. Make sure the timer does not continue changing after it has finished.",
        "Timer ကို စတင်တန်ဖိုးနှင့် Variable ပြောင်းသည့် ဦးတည်ချက် ပြောင်းခြင်းဖြင့် Count up လုပ်ရန် ပြန်ပြင်နိုင်သည်။ Target ရောက်သောအခါ Message ပြနိုင်သည်။ Variable display checkbox ဖြင့် Scratch Stage ပေါ်တွင် Value ကို ပြ/ဖျောက်နိုင်သည်။ အရင်ဆုံး အချိန်တိုဖြင့် စမ်းပြီး Reset နှင့် ပြီးဆုံး Message ကို စစ်ပါ။ ပြီးဆုံးပြီးနောက် Timer ဆက်မပြောင်းကြောင်း သေချာပါစေ။",
        "Choose count-up or countdown → set the initial value → set the stop condition → add a message → test start, reset and finish.",
        "Count-up/Countdown ရွေးပါ → စတင်တန်ဖိုးသတ်မှတ်ပါ → ရပ်မည့် Condition သတ်မှတ်ပါ → Message ထည့်ပါ → Start/Reset/Finish စမ်းပါ။"
      ],
      [
        "Writing an algorithm to draw 2D shapes",
        "The Scratch Pen extension can draw lines as a sprite moves. A regular polygon uses equal sides and equal turns. The total of the repeated external turns around a complete shape is 360 degrees, so the turn after each side is 360 divided by the number of sides. A square uses 4 sides and 90-degree turns; a triangle uses 3 sides and 120-degree turns; a hexagon uses 6 sides and 60-degree turns.",
        "Scratch Pen extension သည် Sprite ရွေ့လျားသည့်အခါ မျဉ်းဆွဲနိုင်စေသည်။ Regular polygon တွင် ဘက်အလျားများနှင့် လှည့်ထောင့်များ တူညီသည်။ ပုံတစ်ပတ်လုံး လှည့်သည့် External turn စုစုပေါင်းသည် 360° ဖြစ်သောကြောင့် ဘက်တစ်ခုစီပြီး လှည့်ရမည့်ထောင့် = 360 ÷ ဘက်အရေအတွက် ဖြစ်သည်။ Square တွင် 4 ဘက်/90°၊ Triangle တွင် 3 ဘက်/120°၊ Hexagon တွင် 6 ဘက်/60° ဖြစ်သည်။",
        "Choose the number of sides → calculate 360 ÷ sides → put pen down → repeat move and turn → lift the pen when finished.",
        "ဘက်အရေအတွက်ရွေးပါ → 360 ÷ ဘက်အရေအတွက် တွက်ပါ → Pen down လုပ်ပါ → Move/Turn ကို Repeat လုပ်ပါ → ပြီးလျှင် Pen up လုပ်ပါ။"
      ],
      [
        "Modifying a program to create multiple shapes on screen",
        "If a drawing loop repeats the same shape without moving or turning the sprite, all copies may be drawn in the same place. Add a movement or rotation after each shape to create a pattern. Use nested loops when a pattern repeats both sides of a shape and the whole shape itself. The Erase All block clears drawings from the stage. The eye-dropper tool selects an existing colour from a sprite or backdrop.",
        "Drawing loop သည် Sprite ကို မရွှေ့/မလှည့်ဘဲ Shape တူတူ ထပ်ဆွဲပါက ပုံအားလုံး တစ်နေရာတည်းတွင် ထပ်နေမည်။ Pattern ဖန်တီးရန် Shape တစ်ခုစီပြီးနောက် Movement သို့မဟုတ် Rotation ထည့်ပါ။ Shape ၏ ဘက်များနှင့် Shape တစ်ခုလုံး နှစ်ဆင့်ထပ်လုပ်ရပါက Nested loop သုံးနိုင်သည်။ Erase All block သည် Stage ပေါ်ရှိ ပုံများဖျက်ပြီး Eye-dropper သည် ရှိပြီးသား အရောင်ကို ရွေးပေးသည်။",
        "Draw one shape → move or turn the sprite → repeat the shape routine → use erase all to restart → test the spacing and pattern.",
        "Shape တစ်ခုဆွဲပါ → Sprite ကို ရွှေ့/လှည့်ပါ → Shape routine ထပ်လုပ်ပါ → ပြန်စရန် Erase All သုံးပါ → အကွာအဝေးနှင့် Pattern စစ်ပါ။"
      ],
      [
        "Drawing shapes using coordinates and repurposing your program",
        "The Scratch stage uses an X and Y coordinate system. The centre is (0,0); positive X moves right, negative X moves left, positive Y moves up and negative Y moves down. The standard stage is 480 units wide and 360 units high, so its edges are approximately x = −240 to +240 and y = −180 to +180. Coordinates can place a sprite or drawing at exact points. Repurpose the same drawing program by changing only the needed coordinates.",
        "Scratch Stage တွင် X/Y Coordinate system ကို သုံးသည်။ အလယ်မှတ်သည် (0,0) ဖြစ်ပြီး X အပေါင်းသည် ညာဘက်၊ X အနုတ်သည် ဘယ်ဘက်၊ Y အပေါင်းသည် အပေါ်၊ Y အနုတ်သည် အောက် ဖြစ်သည်။ Standard stage သည် အကျယ် 480 unit၊ အမြင့် 360 unit ဖြစ်သောကြောင့် Edge များသည် x = −240 မှ +240၊ y = −180 မှ +180 ခန့်ဖြစ်သည်။ Coordinate ဖြင့် Sprite/ပုံကို တိကျသောနေရာသို့ ထားနိုင်သည်။ လိုအပ်သော Coordinate များကိုသာ ပြောင်း၍ Program ပြန်အသုံးချပါ။",
        "Mark the centre → identify the required corner or midpoint → write the x and y values → move or glide to each point → check the drawing.",
        "အလယ်မှတ်ထားပါ → လိုအပ်သော ထောင့်/အလယ်မှတ်ကို ရှာပါ → x/y တန်ဖိုးရေးပါ → Point တစ်ခုစီသို့ Move/Glide လုပ်ပါ → ပုံစစ်ပါ။"
      ],
      [
        "Using shapes to represent an object",
        "Complex pictures can be decomposed into simple shapes such as rectangles, triangles, circles and lines. Plan the number, size, colour and angle of each shape. A grid helps estimate coordinates and proportions. For repeated shapes, use loops but move or rotate between each copy. Start with the large main shapes and then add smaller details. Review the result and adjust coordinates, angles and sizes until the parts form the intended object.",
        "ရှုပ်ထွေးသောပုံများကို Rectangle၊ Triangle၊ Circle နှင့် Line ကဲ့သို့ ရိုးရှင်းသော Shape များအဖြစ် ခွဲခြမ်းနိုင်သည်။ Shape တစ်ခုစီ၏ အရေအတွက်၊ အရွယ်အစား၊ အရောင်နှင့် ထောင့်ကို စီစဉ်ပါ။ Grid သည် Coordinate နှင့် အချိုးအစား ခန့်မှန်းရန် ကူညီသည်။ ထပ်နေသော Shape များအတွက် Loop သုံးသော်လည်း Copy တစ်ခုစီကြား ရွှေ့/လှည့်ပါ။ အဓိက Shape ကြီးများမှ စပြီး အသေးစိတ်ထည့်ပါ။",
        "Break the object into shapes → draw the main outline → add coordinates and angles → repeat similar parts → review proportions and correct errors.",
        "Object ကို Shape များအဖြစ် ခွဲပါ → အပြင်ပုံကြမ်းဆွဲပါ → Coordinate/Angle ထည့်ပါ → တူညီသောအပိုင်းများ ထပ်လုပ်ပါ → အချိုးအစားစစ်ပြီး အမှားပြင်ပါ။"
      ]
    ],
    "terms": [
      [
        "Repurpose",
        "Change an existing algorithm for a new requirement.",
        "လိုအပ်ချက်အသစ်အတွက် ရှိပြီးသား Algorithm ကို ပြောင်းလဲအသုံးချခြင်း။"
      ],
      [
        "Command",
        "An instruction that tells a program or device what to do.",
        "Program/Device ကို ဘာလုပ်ရမည် ညွှန်ကြားသော Instruction။"
      ],
      [
        "Variable",
        "A named place to store a value or data.",
        "Value/Data သိမ်းဆည်းရန် အမည်ပေးထားသော နေရာ။"
      ],
      [
        "Value",
        "The data currently stored in a variable.",
        "Variable ထဲတွင် လက်ရှိသိမ်းထားသော Data။"
      ],
      [
        "Input",
        "Data entered by a user or another source.",
        "User သို့မဟုတ် အခြား Source မှ ထည့်သွင်းသော Data။"
      ],
      [
        "Output",
        "Information produced or displayed by a program.",
        "Program က ထုတ်ပေး/ပြသသော အချက်အလက်။"
      ],
      [
        "Sequence",
        "Instructions carried out in the correct order.",
        "ညွှန်ကြားချက်များကို မှန်ကန်သော အစီအစဉ်ဖြင့် လုပ်ဆောင်ခြင်း။"
      ],
      [
        "Selection",
        "Choosing a path based on a condition.",
        "Condition အပေါ်မူတည်၍ လမ်းကြောင်းရွေးချယ်ခြင်း။"
      ],
      [
        "Iteration",
        "Repeating a set of instructions.",
        "ညွှန်ကြားချက်အစုကို ထပ်ခါတလဲလဲ လုပ်ဆောင်ခြင်း။"
      ],
      [
        "REPEAT loop",
        "Repeats instructions a set number of times.",
        "သတ်မှတ်အကြိမ်ရေအတိုင်း Instruction ထပ်လုပ်သော Loop။"
      ],
      [
        "REPEAT UNTIL",
        "Repeats until a condition becomes true.",
        "Condition မှန်လာသည်အထိ ထပ်လုပ်သော Loop။"
      ],
      [
        "Condition",
        "A test that evaluates as true or false.",
        "True/False ရလဒ်ထုတ်ပေးသော စမ်းသပ်ချက်။"
      ],
      [
        "Scratch",
        "A block-based visual programming environment.",
        "Block အခြေပြု Visual programming environment။"
      ],
      [
        "Control block",
        "Scratch blocks that manage loops and conditions.",
        "Loop နှင့် Condition များကို ထိန်းချုပ်သော Scratch block။"
      ],
      [
        "Motion block",
        "Scratch blocks that move or turn a sprite.",
        "Sprite ကို ရွှေ့/လှည့်စေသော Scratch block။"
      ],
      [
        "Operator block",
        "A block that performs a calculation or comparison.",
        "တွက်ချက်ခြင်း/နှိုင်းယှဉ်ခြင်း လုပ်ဆောင်သော Block။"
      ],
      [
        "Wait block",
        "A block that pauses a script for a set time.",
        "သတ်မှတ်အချိန်အထိ Script ကို ခဏရပ်စေသော Block။"
      ],
      [
        "Timer",
        "A program feature that measures or counts time.",
        "အချိန်တိုင်းတာ/ရေတွက်သော Program feature။"
      ],
      [
        "Countdown",
        "A timer that decreases towards zero.",
        "သုညသို့ တဖြည်းဖြည်း လျော့သွားသော Timer။"
      ],
      [
        "Increment",
        "Increase a value by an amount.",
        "တန်ဖိုးတစ်ခုကို ပမာဏတစ်ခုဖြင့် တိုးခြင်း။"
      ],
      [
        "Decrement",
        "Decrease a value by an amount.",
        "တန်ဖိုးတစ်ခုကို ပမာဏတစ်ခုဖြင့် လျှော့ခြင်း။"
      ],
      [
        "Initial value",
        "The value assigned before a process begins.",
        "လုပ်ငန်းစတင်မီ သတ်မှတ်ထားသော မူလတန်ဖိုး။"
      ],
      [
        "Pen extension",
        "Scratch blocks used to draw on the stage.",
        "Stage ပေါ်တွင် ပုံဆွဲရန် သုံးသော Scratch block အစု။"
      ],
      [
        "Pen down",
        "A pen command that draws while the sprite moves.",
        "Sprite ရွေ့သည့်အခါ မျဉ်းဆွဲစေသော Pen command။"
      ],
      [
        "Pen up",
        "A pen command that moves without drawing.",
        "မဆွဲဘဲ ရွေ့စေသော Pen command။"
      ],
      [
        "Coordinate",
        "A pair of values that identifies a position.",
        "တည်နေရာကို ဖော်ပြသော တန်ဖိုးအတွဲ။"
      ],
      [
        "X coordinate",
        "The horizontal position on a coordinate plane.",
        "Coordinate plane ပေါ်ရှိ အလျားလိုက် တည်နေရာ။"
      ],
      [
        "Y coordinate",
        "The vertical position on a coordinate plane.",
        "Coordinate plane ပေါ်ရှိ ဒေါင်လိုက် တည်နေရာ။"
      ],
      [
        "Stage",
        "The area where Scratch sprites and drawings appear.",
        "Scratch Sprite နှင့် ပုံများ ပေါ်လာသော ဧရိယာ။"
      ],
      [
        "Polygon",
        "A closed 2D shape made from straight sides.",
        "မျဉ်းဖြောင့်ဘက်များဖြင့် ဖွဲ့စည်းထားသော ပိတ်ထားသည့် 2D ပုံ။"
      ],
      [
        "Side",
        "One straight edge of a polygon.",
        "Polygon ၏ မျဉ်းဖြောင့်အနားတစ်ခု။"
      ],
      [
        "Angle",
        "The amount of turn between two lines or directions.",
        "မျဉ်း/ဦးတည်ချက် နှစ်ခုကြား လှည့်ထောင့်။"
      ],
      [
        "Rotation",
        "Turning an object around a point.",
        "အရာဝတ္ထုတစ်ခုကို အမှတ်တစ်ခုအပေါ် လှည့်ခြင်း။"
      ],
      [
        "360 degrees",
        "A complete turn around a point.",
        "အမှတ်တစ်ခုကို တစ်ပတ်ပြည့် လှည့်သည့် ထောင့်။"
      ],
      [
        "Square",
        "A four-sided shape with equal sides and right angles.",
        "ဘက်လေးဘက်တူပြီး ထောင့်မှန်ရှိသော ပုံ။"
      ],
      [
        "Triangle",
        "A polygon with three sides.",
        "ဘက်သုံးဘက်ပါသော Polygon။"
      ],
      [
        "Rectangle",
        "A four-sided shape with opposite sides equal and right angles.",
        "ဆန့်ကျင်ဘက်ဘက်များတူပြီး ထောင့်မှန်ရှိသော ပုံ။"
      ],
      [
        "Hexagon",
        "A polygon with six sides.",
        "ဘက်ခြောက်ဘက်ပါသော Polygon။"
      ],
      [
        "Glide block",
        "Moves a sprite gradually to a position over time.",
        "အချိန်ယူ၍ Sprite ကို နေရာတစ်ခုသို့ ရွှေ့ပေးသော Block။"
      ],
      [
        "Go to block",
        "Moves a sprite immediately to a position.",
        "Sprite ကို နေရာတစ်ခုသို့ ချက်ချင်းရွှေ့ပေးသော Block။"
      ],
      [
        "Erase All",
        "A Pen block that removes drawings from the stage.",
        "Stage ပေါ်ရှိ ပုံများကို ဖျက်ပေးသော Pen block။"
      ],
      [
        "Eye dropper",
        "A tool that picks an existing colour.",
        "ရှိပြီးသား အရောင်ကို ရွေးယူသော Tool။"
      ]
    ],
    "examples": [
      "A fence algorithm repeats the paint steps four times for four panels.",
      "A countdown timer waits one second and decreases the timer variable by one.",
      "A square can be drawn by repeating move forward and turn 90 degrees four times.",
      "A diamond can be created by gliding to four stage coordinates."
    ],
    "examplesMy": [
      "ခြံစည်းရိုး Algorithm တွင် Panel လေးခုအတွက် ဆေးသုတ်အဆင့်များကို လေးကြိမ် ထပ်လုပ်သည်။",
      "Countdown timer သည် တစ်စက္ကန့်စောင့်ပြီး Timer Variable ကို တစ်လျှော့သည်။",
      "Square ကို Move forward နှင့် Turn 90° ကို လေးကြိမ် Repeat လုပ်၍ ဆွဲနိုင်သည်။",
      "Stage Coordinate လေးခုသို့ Glide လုပ်၍ Diamond ပုံဖန်တီးနိုင်သည်။"
    ],
    "table": {
      "caption": "Regular shapes · side count and repeated turn",
      "headers": [
        "Shape",
        "Sides",
        "Turn after each side"
      ],
      "rows": [
        [
          "Triangle",
          "3",
          "120°"
        ],
        [
          "Square",
          "4",
          "90°"
        ],
        [
          "Rectangle",
          "4",
          "90°"
        ],
        [
          "Hexagon",
          "6",
          "60°"
        ]
      ]
    },
    "activities": [
      [
        "Algorithm repurpose",
        "Change a whistle-and-clap algorithm so it works with two whistle blows.",
        "ဝီစီတစ်ချက်နှင့် လက်ခုပ်အစီအစဉ်ကို ဝီစီနှစ်ချက်ဖြင့် လုပ်ဆောင်နိုင်အောင် ပြောင်းပါ။"
      ],
      [
        "Countdown timer",
        "Create a timer from 10 to 0 with a one-second wait and a finish message.",
        "၁၀ မှ ၀ အထိ တစ်စက္ကန့်စောင့်ပြီး ပြီးဆုံး Message ပြသော Timer ဖန်တီးပါ။"
      ],
      [
        "Draw a square and hexagon",
        "Use the Pen extension and calculate the correct turn angle for each shape.",
        "Pen extension သုံး၍ Square နှင့် Hexagon ဆွဲပြီး လှည့်ထောင့်တွက်ပါ။"
      ],
      [
        "Coordinate diamond",
        "Use the four midpoints of the Scratch stage to draw a diamond.",
        "Scratch Stage ၏ ဘေးအလယ်မှတ်လေးခုသုံး၍ Diamond ဆွဲပါ။"
      ],
      [
        "Build a simple object",
        "Break a simple object into rectangles, triangles and lines, then draw it.",
        "ရိုးရှင်းသော Object ကို Rectangle၊ Triangle၊ Line များအဖြစ်ခွဲပြီး ဆွဲပါ။"
      ]
    ],
    "slides": [
      "Repurposing an algorithm",
      "Loops and repeated actions",
      "Variables, input and output",
      "Changing a program for a new task",
      "Countdown timer logic",
      "Testing and resetting a timer",
      "Scratch Pen extension",
      "Angles for regular shapes",
      "Stage coordinates and patterns",
      "Combining shapes to draw an object"
    ],
    "essays": [
      [
        "Explain what it means to repurpose an algorithm and give an example.",
        "Repurposing means changing only the commands needed for a new task while keeping useful parts. For example, a program that totals money raised can be changed to calculate average attendance by renaming variables and changing the calculation.",
        [
          "change",
          "commands",
          "new task",
          "variables",
          "calculation"
        ]
      ],
      [
        "Explain the purpose of the wait block in a countdown timer.",
        "The wait block pauses the program between timer values. Waiting one second makes the countdown visible and gives it a steady pace. Without a wait, the variable may decrease too quickly to read.",
        [
          "wait",
          "pause",
          "one second",
          "countdown",
          "variable"
        ]
      ],
      [
        "How do you calculate the turn angle for a regular polygon? Give examples for a square and hexagon.",
        "Divide 360 degrees by the number of sides. A square has four sides, so 360 ÷ 4 = 90 degrees. A hexagon has six sides, so 360 ÷ 6 = 60 degrees.",
        [
          "360",
          "sides",
          "square",
          "90",
          "hexagon",
          "60"
        ]
      ],
      [
        "Describe how coordinates are used to draw a diamond on the Scratch stage.",
        "Use the centre and the midpoints of the four stage edges. The stage centre is (0,0); the edge midpoints are approximately (0,180), (240,0), (0,-180) and (-240,0). Move or glide between these coordinates in order to draw the diamond.",
        [
          "coordinates",
          "0,0",
          "240",
          "180",
          "midpoints"
        ]
      ]
    ]
  }
];
window.HJS_LESSON_SECTION_NAMES = ['Unit Overview','Learning Objectives','Detailed Study Notes','Topic-by-Topic Explanations','Key Definitions','Important Examples','Tables & Diagrams','Step-by-Step Instructions','Practical Activities','Worked Examples','Important Exam Points','Unit Glossary','Unit Presentation PowerPoint Slide Outline','Knowledge Check Quiz','One-Hour Secure Unit Examination'];
