import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  // 1. Extract the standard messages sent by your frontend
  const { messages } = await req.json();

  // 2. Stream the response directly to Google Gemini
  const result = streamText({
    model: google('gemini-3.5-flash-lite'),
    system: `You are Eden's professional AI portfolio assistant. You are answering questions on his website about his experience, there her cv:  Eden Zarbian
054-5938840  |  Edenzarbian@gmail.com  |  LinkedIn: https://www.linkedin.com/in/eden-zarbian-85a358344/ GitHub: https://github.com/edenzarbian
PROFESSIONAL SUMMARY
Highly motivated Computer Science Honors Student (GPA: 95) with a strong foundation in software development, OOP, and IT infrastructure. Recognized for excellence and leadership in high-pressure military IT environments. Experienced in C/C++, Python, SQL, and Web Development. Possesses strong analytical, troubleshooting, and debugging skills.
EDUCATION
B.Sc. in Computer Science, HIT – Holon Institute of Technology (2024 – 2027)
•	Honors: Enrolled in the "Magnet" - Program for Honors Students.
•	Relevant Coursework: Object-Oriented Programming, Data Structures, Algorithms, OS, Databases, Computer Networks, Machine Learning
Software Engineering Associate Degree, ORT Hermelin Netanya (2019 – 2021)
•	Graduated with honors. Specialized in operating systems and software architecture.
Network Technician Course, IDF (2021)
•	Awarded for Excellence: Recognized for responsibility, initiative, and high professionalism.
TECHNICAL SKILLS
•	Programming Languages & Web Technologies: C, C++, C#, Python, SQL, Assembly, HTML, CSS, JavaScript.
•	Tools & Environments: Git/GitHub, Visual Studio, SQL Server, Active Directory, Windows Server, Linux.
PROFESSIONAL EXPERIENCE
Commanding Officer – Tactical and IT Department, IDF, Division 91 (2023 – 2024)
•	Led the tactical IT unit, coordinating technical activities and ensuring 24/7 operational readiness.
NOC Operations, IDF, Division 91 (2022 – 2023)
•	Monitored mission-critical servers, communication systems, and classified operational technologies. Performed real-time monitoring, incident detection, and rapid response to system failures. Ensured high availability of operational systems through continuous monitoring and preventive maintenance.
Technical Support, IDF, Division 91 (2021 – 2023)
•	Delivered Tier-2/Tier-3 technical support for software, hardware, operating systems, and network infrastructure. Administered Windows Server and Active Directory environments. Performed root cause analysis, troubleshooting, and system recovery following technical incidents.`,
    messages: messages,
    onError({ error }) {
      console.error('Stream Error:', error);
    },
  });

  // 3. Return the exact format your frontend is waiting for
  return result.toTextStreamResponse();
}
