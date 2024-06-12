import { Challenge } from "../utils/types";
export const challenges: Challenge[] = [
    {
        id: 11102,
        hero: true,
        title: "تحدي رمضان الخير",
        description: "رمضان، الشهر المبارك الذي يحمل في طياته روحانية خاصة، يأتي ليحمل معه فرصة للتجديد والتحول الروحي. يعتبر رمضان فرصة للتأمل والتفكير، وفرصة لبناء علاقة أقوى مع الله ومع المجتمع. إنه شهر يشحن القلوب بالإيمان والرحمة، ويمنح الفرصة لتجديد النية وتحسين العلاقات الاجتماعية.    ",
        agancy: "اسم الإدارة المعنية بالتحدي",
        startDate: "2024-04-01",
        startTime: "08:00",
        endDate: "2024-07-19",
        endTime: "20:00",
        category: "تحدي اجتماعي",
        cover: "/img/challenges/challenge-01.png",
        author: {
            name: "عبدالله محمد العتيبي",
            username: "a.otaibei",
            avatar: "/img/profiles/profile-02.png",
            title: "مدير التطوير التقني والابتكار"
        },
        managers: [
            {
                id: 1,
                roll: "الراعي",
                name: "فاطمة عبدالعزيز الغامدي",
                username: "f.ghamdi",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير قطاع تكنولوجيا المعلومات"
            },
            {
                id: 2,
                roll: "المدير",
                name: "يوسف خالد الشمراني",
                username: "y.shamrany",
                avatar: "/img/profiles/profile-03.png",
                title: "مدير إدارة الشبكات والاتصالات"
            }
        ],
        reviewers: [
            {
                id: 1,
                name: " عبدالعزيز عبدالمحسن الشمري",
                username: "a.shamry",
                avatar: "/img/profiles/profile-02.png",
                title: "مهندس تطبيقات الجوال "
            },
            {
                id: 2,
                name: "سارة محمد القحطاني",
                username: "s.qahtani",
                avatar: "/img/profiles/profile-04.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            },
            {
                id: 3,
                name: "جوانا عبدالوهاب السليمان",
                username: "j.salman",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير التسويق والعلاقات العامة"
            },
            {
                id: 4,
                name: "فهد سعود العنزي",
                username: "f.anzi",
                avatar: "/img/profiles/profile-03.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            }
        ],
        status: [
            {
                id: 1,
                icon: "in-flag",
                name: "تقديم الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 2,
                icon: "in-clock",
                name: "الموافقة على الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },

            {
                id: 3,
                icon: "in-comments",
                name: "المناقشة والتصويت",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 4,
                icon: "in-star",
                name: "عرض وتقييم النتائج",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "current"
            },
            {
                id: 5,
                icon: "in-check-circle",
                name: "التنفيذ والاغلاق",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "upcoming"
            }
        ],
        duration: 0,
        remainingDays: "",
        progress: 0,
        progressPercentage: 0,
        progressColor: ""
    },
    {
        id: 2,
        hero: true,
        title: "تحدي القراءة",
        description: "القراءة هي السبيل الأمثل للتعلم والتطور، وهي الطريقة الأساسية لاكتساب المعرفة والثقافة. تحدي القراءة يأتي ليحفز الأفراد على القراءة والاستفادة منها، ويشجعهم على تطوير مهاراتهم اللغوية والفكرية. إنه تحدي يهدف إلى تحفيز الأفراد على القراءة بانتظام، وتوجيههم نحو اختيار الكتب المناسبة لهم، وتحفيزهم على تبادل الأفكار والآراء حول الكتب التي قرؤوها.",
        agancy: "اسم الإدارة المعنية بالتحدي",
        startDate: "2023-06-01",
        startTime: "08:00",
        endDate: "2024-07-09",
        endTime: "20:00",
        category: "تحدي ثقافي",
        cover: "/img/challenges/challenge-02.png",
        author: {
            name: "عبدالله محمد العتيبي",
            username: "a.otaibei",
            avatar: "/img/profiles/profile-01.png",
            title: "مدير التطوير التقني والابتكار"
        },
        managers: [
            {
                id: 1,
                roll: "الراعي",
                name: "فاطمة عبدالعزيز الغامدي",
                username: "f.ghamdi",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير قطاع تكنولوجيا المعلومات"
            },
            {
                id: 2,
                roll: "المدير",
                name: "يوسف خالد الشمراني",
                username: "y.shamrany",
                avatar: "/img/profiles/profile-03.png",
                title: "مدير إدارة الشبكات والاتصالات"
            }
        ],
        reviewers: [
            {
                id: 1,
                name: " عبدالعزيز عبدالمحسن الشمري",
                username: "a.shamry",
                avatar: "/img/profiles/profile-02.png",
                title: "مهندس تطبيقات الجوال "
            },
            {
                id: 2,
                name: "سارة محمد القحطاني",
                username: "s.qahtani",
                avatar: "/img/profiles/profile-04.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            },
            {
                id: 3,
                name: "جوانا عبدالوهاب السليمان",
                username: "j.salman",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير التسويق والعلاقات العامة"
            },
            {
                id: 4,
                name: "فهد سعود العنزي",
                username: "f.anzi",
                avatar: "/img/profiles/profile-03.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            }
        ],
        status: [
            {
                id: 1,
                icon: "in-flag",
                name: "تقديم الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 2,
                icon: "in-clock",
                name: "الموافقة على الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },

            {
                id: 3,
                icon: "in-comments",
                name: "المناقشة والتصويت",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 4,
                icon: "in-star",
                name: "عرض وتقييم النتائج",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "current"
            },
            {
                id: 5,
                icon: "in-check-circle",
                name: "التنفيذ والاغلاق",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "upcoming"
            }
        ],
        duration: 0,
        remainingDays: "",
        progress: 0,
        progressPercentage: 0,
        progressColor: ""
    },
    {
        id: 3,
        hero: true,
        title: "تحدي الرياضة",
        description: "الرياضة هي جزء أساسي من حياة الإنسان، وهي الوسيلة الأمثل للحفاظ على الصحة واللياقة البدنية. تحدي الرياضة يأتي ليشجع الأفراد على ممارسة الرياضة بانتظام، ويحفزهم على تحقيق أهدافهم الرياضية. إنه تحدي يهدف إلى تحفيز الأفراد على ممارسة الرياضة بانتظام، وتحفيزهم على تحقيق أهدافهم الرياضية، وتوجيههم نحو اختيار الرياضات المناسبة لهم.",
        agancy: "اسم الإدارة المعنية بالتحدي",
        startDate: "2024-08-01",
        startTime: "08:00",
        endDate: "2024-09-09",
        endTime: "20:00",
        category: "تحدي رياضي",
        cover: "/img/challenges/challenge-03.png",
        author: {
            name: "عبدالله محمد العتيبي",
            username: "a.otaibei",
            avatar: "/img/profiles/profile-01.png",
            title: "مدير التطوير التقني والابتكار"
        },
        managers: [
            {
                id: 1,
                roll: "الراعي",
                name: "فاطمة عبدالعزيز الغامدي",
                username: "f.ghamdi",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير قطاع تكنولوجيا المعلومات"
            },
            {
                id: 2,
                roll: "المدير",
                name: "يوسف خالد الشمراني",
                username: "y.shamrany",
                avatar: "/img/profiles/profile-03.png",
                title: "مدير إدارة الشبكات والاتصالات"
            }
        ],
        reviewers: [
            {
                id: 1,
                name: " عبدالعزيز عبدالمحسن الشمري",
                username: "a.shamry",
                avatar: "/img/profiles/profile-02.png",
                title: "مهندس تطبيقات الجوال "
            },
            {
                id: 2,
                name: "سارة محمد القحطاني",
                username: "s.qahtani",
                avatar: "/img/profiles/profile-04.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            },
            {
                id: 3,
                name: "جوانا عبدالوهاب السليمان",
                username: "j.salman",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير التسويق والعلاقات العامة"
            },
            {
                id: 4,
                name: "فهد سعود العنزي",
                username: "f.anzi",
                avatar: "/img/profiles/profile-03.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            }
        ],
        status: [
            {
                id: 1,
                icon: "in-flag",
                name: "تقديم الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 2,
                icon: "in-clock",
                name: "الموافقة على الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },

            {
                id: 3,
                icon: "in-comments",
                name: "المناقشة والتصويت",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 4,
                icon: "in-star",
                name: "عرض وتقييم النتائج",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "current"
            },
            {
                id: 5,
                icon: "in-check-circle",
                name: "التنفيذ والاغلاق",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "upcoming"
            }
        ],
        duration: 0,
        remainingDays: "",
        progress: 0,
        progressPercentage: 0,
        progressColor: ""
    },
    {
        id: 4,
        hero: false,
        title: "تحدي البيئة",
        description: "البيئة هي العنصر الأساسي في حياة الإنسان، وهي المصدر الرئيسي للحياة على الأرض. تحدي البيئة يأتي ليحفز الأفراد على المحافظة على البيئة وحمايتها، ويشجعهم على تبني سلوكيات صديقة للبيئة. إنه تحدي يهدف إلى تحفيز الأفراد على المحافظة على البيئة وحمايتها، وتوجيههم نحو اتخاذ الإجراءات اللازمة للحفاظ على البيئة.",
        agancy: "اسم الإدارة المعنية بالتحدي",
        startDate: "2023-10-01",
        startTime: "08:00",
        endDate: "2024-11-09",
        endTime: "20:00",
        category: "تحدي بيئي",
        cover: "/img/challenges/challenge-04.png",
        author: {
            name: "عبدالله محمد العتيبي",
            username: "a.otaibei",
            avatar: "/img/profiles/profile-01.png",
            title: "مدير التطوير التقني والابتكار"
        },
        managers: [
            {
                id: 1,
                roll: "الراعي",
                name: "فاطمة عبدالعزيز الغامدي",
                username: "f.ghamdi",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير قطاع تكنولوجيا المعلومات"
            },
            {
                id: 2,
                roll: "المدير",
                name: "يوسف خالد الشمراني",
                username: "y.shamrany",
                avatar: "/img/profiles/profile-03.png",
                title: "مدير إدارة الشبكات والاتصالات"
            }
        ],
        reviewers: [
            {
                id: 1,
                name: " عبدالعزيز عبدالمحسن الشمري",
                username: "a.shamry",
                avatar: "/img/profiles/profile-02.png",
                title: "مهندس تطبيقات الجوال "
            },
            {
                id: 2,
                name: "سارة محمد القحطاني",
                username: "s.qahtani",
                avatar: "/img/profiles/profile-04.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            },
            {
                id: 3,
                name: "جوانا عبدالوهاب السليمان",
                username: "j.salman",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير التسويق والعلاقات العامة"
            },
            {
                id: 4,
                name: "فهد سعود العنزي",
                username: "f.anzi",
                avatar: "/img/profiles/profile-03.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            }
        ],
        status: [
            {
                id: 1,
                icon: "in-flag",
                name: "تقديم الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 2,
                icon: "in-clock",
                name: "الموافقة على الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },

            {
                id: 3,
                icon: "in-comments",
                name: "المناقشة والتصويت",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 4,
                icon: "in-star",
                name: "عرض وتقييم النتائج",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "current"
            },
            {
                id: 5,
                icon: "in-check-circle",
                name: "التنفيذ والاغلاق",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "upcoming"
            }
        ],
        duration: 0,
        remainingDays: "",
        progress: 0,
        progressPercentage: 0,
        progressColor: ""
    },
    {
        id: 5,
        hero: false,
        title: "تحدي الصحة",
        description: "الصحة هي الثروة الحقيقية التي يمتلكها الإنسان، وهي العنصر الأساسي في حياة الإنسان. تحدي الصحة يأتي ليحفز الأفراد على الاهتمام بصحتهم والعناية بها، ويشجعهم على تبني أسلوب حياة صحي. إنه تحدي يهدف إلى تحفيز الأفراد على الاهتمام بصحتهم والعناية بها، وتوجيههم نحو اتخاذ الإجراءات اللازمة للحفاظ على صحتهم.",
        agancy: "اسم الإدارة المعنية بالتحدي",
        startDate: "2023-12-01",
        startTime: "08:00",
        endDate: "2025-01-09",
        endTime: "20:00",
        category: "تحدي صحي",
        cover: "/img/challenges/challenge-05.png",
        author: {
            name: "عبدالله محمد العتيبي",
            username: "a.otaibei",
            avatar: "/img/profiles/profile-01.png",
            title: "مدير التطوير التقني والابتكار"
        },
        managers: [
            {
                id: 1,
                roll: "الراعي",
                name: "فاطمة عبدالعزيز الغامدي",
                username: "f.ghamdi",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير قطاع تكنولوجيا المعلومات"
            },
            {
                id: 2,
                roll: "المدير",
                name: "يوسف خالد الشمراني",
                username: "y.shamrany",
                avatar: "/img/profiles/profile-03.png",
                title: "مدير إدارة الشبكات والاتصالات"
            }
        ],
        reviewers: [
            {
                id: 1,
                name: " عبدالعزيز عبدالمحسن الشمري",
                username: "a.shamry",
                avatar: "/img/profiles/profile-02.png",
                title: "مهندس تطبيقات الجوال "
            },
            {
                id: 2,
                name: "سارة محمد القحطاني",
                username: "s.qahtani",
                avatar: "/img/profiles/profile-04.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            },
            {
                id: 3,
                name: "جوانا عبدالوهاب السليمان",
                username: "j.salman",
                avatar: "/img/profiles/profile-01.png",
                title: "مدير التسويق والعلاقات العامة"
            },
            {
                id: 4,
                name: "فهد سعود العنزي",
                username: "f.anzi",
                avatar: "/img/profiles/profile-03.png",
                title: "مختص أمن المعلومات وحماية البيانات"
            }
        ],
        status: [
            {
                id: 1,
                icon: "in-flag",
                name: "تقديم الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 2,
                icon: "in-clock",
                name: "الموافقة على الأفكار",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },

            {
                id: 3,
                icon: "in-comments",
                name: "المناقشة والتصويت",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "completed"
            },
            {
                id: 4,
                icon: "in-star",
                name: "عرض وتقييم النتائج",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "current"
            },
            {
                id: 5,
                icon: "in-check-circle",
                name: "التنفيذ والاغلاق",
                endDate: "2024-07-01",
                endTime: "20:00",
                status: "upcoming"
            }
        ],
        duration: 0,
        remainingDays: "",
        progress: 0,
        progressPercentage: 0,
        progressColor: ""
    }
]







