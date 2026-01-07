const questions = [
    {
        profile: "MERN",
        level: "Easy",
        question: "You are building a REST API. Which HTTP method should be used to fetch data?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: 1
    },
    {
        profile: "MERN",
        level: "Medium",
        question: "In MongoDB, which field is automatically indexed?",
        options: ["id", "_id", "index", "primary"],
        answer: 1
    },
    {
        profile: "MERN",
        level: "Easy",
        question: "Your frontend cannot access backend API. What is the most likely issue?",
        options: [
            "Database indexing",
            "CORS configuration",
            "React hooks",
            "MongoDB schema"
        ],
        answer: 1
    },
    {
        profile: "MERN",
        level: "Medium",
        question: "Which improves React app performance?",
        options: [
            "Inline CSS",
            "useMemo / useCallback",
            "More components",
            "Deep props drilling"
        ],
        answer: 1
    },
    {
        profile: "MERN",
        level: "Hard",
        question: "API response time is high. What should you optimize first?",
        options: [
            "UI colors",
            "Database queries",
            "React routing",
            "HTML structure"
        ],
        answer: 1
    },



    {
        profile: "Python",
        level: "Easy",
        question: "You need to store unique values. Which data structure is best?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 2
    },
    {
        profile: "Python",
        level: "Easy",
        question: "A script runs slowly on large data. What should you optimize first?",
        options: [
            "Variable names",
            "Algorithm efficiency",
            "Print statements",
            "Comments"
        ],
        answer: 1
    },
    {
        profile: "Python",
        level: "Medium",
        question: "Which structure is best for fast membership testing?",
        options: [
            "List",
            "Tuple",
            "Set",
            "Dictionary"
        ],
        answer: 2
    },
    {
        profile: "Python",
        level: "Hard",
        question: "Your application crashes due to memory issues. What is the best solution?",
        options: [
            "Increase recursion",
            "Use generators",
            "Add loops",
            "Disable garbage collection"
        ],
        answer: 1
    },



    {
        profile: "Java",
        level: "Medium",
        question: "Which principle allows method overriding?",
        options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
        answer: 2
    },
    {
        profile: "Java",
        level: "Easy",
        question: "Which feature allows Java to run on different platforms?",
        options: [
            "Inheritance",
            "JVM",
            "Compilation",
            "Encapsulation"
        ],
        answer: 1 // in the indexing form that start form the 0 [0,1,2,3]
    },
    {
        profile: "Java",
        level: "Medium",
        question: "When should you use an interface over a class?",
        options: [
            "To store data",
            "To achieve multiple inheritance",
            "For performance",
            "To avoid abstraction"
        ],
        answer: 1
    },
    {
        profile: "Java",
        level: "Hard",
        question: "A multi-threaded app faces race conditions. What should you use?",
        options: [
            "Static methods",
            "Synchronized blocks",
            "Constructors",
            "Final variables"
        ],
        answer: 1
    },


    {
        profile: "Data Analytics",
        level: "Hard",
        question: "Which metric best measures model precision?",
        options: ["Recall", "F1 Score", "Accuracy", "True Positive Rate"],
        answer: 1
    },
    {
        profile: "Data Analytics",
        level: "Easy",
        question: "You receive missing values in data. What is the first step?",
        options: [
            "Delete dataset",
            "Analyze missing pattern",
            "Train model",
            "Normalize data"
        ],
        answer: 1
    },
    {
        profile: "Data Analytics",
        level: "Medium",
        question: "Which visualization best shows distribution?",
        options: [
            "Line chart",
            "Bar chart",
            "Histogram",
            "Scatter plot"
        ],
        answer: 2
    },
    {
        profile: "Data Analytics",
        level: "Hard",
        question: "Model performs well on training but poorly on test data. This indicates?",
        options: [
            "Underfitting",
            "Overfitting",
            "Bias",
            "Data leakage"
        ],
        answer: 1
    },


    {
        profile: "UI/UX",
        level: "Easy",
        question: "A user struggles to find the checkout button on a website. What should you do first?",
        options: [
            "Change website colors",
            "Conduct usability testing",
            "Increase marketing",
            "Rewrite backend code"
        ],
        answer: 1
    },
    {
        profile: "UI/UX",
        level: "Medium",
        question: "Users abandon a form midway. Which UX metric best identifies the issue?",
        options: [
            "Bounce rate",
            "Task success rate",
            "Session duration",
            "Error rate"
        ],
        answer: 3
    },
    {
        profile: "UI/UX",
        level: "Hard",
        question: "A mobile app has good UI but poor retention. What is the best next step?",
        options: [
            "Redesign the UI",
            "Improve onboarding flow",
            "Add animations",
            "Change font styles"
        ],
        answer: 1
    },


    {
        profile: "Digital Marketing",
        level: "Easy",
        question: "Your website traffic is high but conversions are low. What should you analyze first?",
        options: [
            "Server speed",
            "Landing page experience",
            "Domain name",
            "Social media followers"
        ],
        answer: 1
    },
    {
        profile: "Digital Marketing",
        level: "Medium",
        question: "A campaign shows high impressions but low CTR. What does this indicate?",
        options: [
            "Poor targeting or creatives",
            "Website downtime",
            "High competition",
            "SEO issue"
        ],
        answer: 0
    },
    {
        profile: "Digital Marketing",
        level: "Hard",
        question: "Which metric best evaluates long-term campaign effectiveness?",
        options: [
            "CTR",
            "Bounce rate",
            "Customer Lifetime Value",
            "Impressions"
        ],
        answer: 2
    },

    {
        profile: "BDE",
        level: "Easy",
        question: "A potential client shows interest but delays decisions. What should you do?",
        options: [
            "Stop follow-ups",
            "Offer value-driven follow-up",
            "Reduce pricing immediately",
            "Ignore the lead"
        ],
        answer: 1
    },
    {
        profile: "BDE",
        level: "Medium",
        question: "Which KPI best measures sales pipeline health?",
        options: [
            "Revenue",
            "Lead conversion rate",
            "Brand awareness",
            "Website visits"
        ],
        answer: 1
    },
    {
        profile: "BDE",
        level: "Hard",
        question: "A deal fails repeatedly at the negotiation stage. What should you analyze?",
        options: [
            "Lead source",
            "Pricing strategy and objections",
            "Marketing spend",
            "CRM software"
        ],
        answer: 1
    },



];
