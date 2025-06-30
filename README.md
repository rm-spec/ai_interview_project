 
PrepWise - AI powered mock interview platform
Overview
The AI Mock Interview Platform is a modern, fully responsive, and browser-based application developed using React (for dynamic user interfaces), Vite (for ultra-fast bundling and development), and TypeScript (for enhanced type safety and code scalability). This project is designed to help individuals prepare effectively for job interviews by simulating real-life interview environments and offering structured practice across different domains.
The platform mimics an interview process where users are presented with sequential questions, to which they respond, and finally receive a summary to reflect upon their answers. This enables both beginners and experienced professionals to sharpen their communication skills, organize thoughts, and prepare for real-time pressure scenarios.
The project is built with scalability and modularity in mind, enabling future integration of AI-generated questions using platform Gemini API, user analytics, and voice-based interaction to make the experience more immersive.
 

Purpose and Motivation
Job interviews can be stressful, especially for those with limited exposure to structured questioning. This platform aims to:
•	Provide a safe, repeatable, and private environment for mock interviews.
•	Reduce anxiety and improve response time through consistent practice.
•	Introduce users to commonly asked HR and technical questions in a timed setting.
•	Help colleges and institutions integrate interview simulations into their career development programs.
 

Features Highlight
•	Structured question flow categorized into domains (HR, Technical, etc.).
•	Clean UI/UX using Tailwind CSS and responsive React components.
•	State management for saving question progress, user responses, and summaries.
•	Dynamic routing between different pages (Home → Interview → Summary).
•	Future AI capabilities (e.g., real-time question generation from OpenAI).
•	White labelling support for colleges or businesses wishing to brand the product.
 



Target Users
•	Students preparing for placements or internships.
•	Freshers looking to build confidence before their first interviews.
•	Working professionals seeking to switch roles or industries.
•	Educators and institutions conducting mock interview drills.
 

Key Objectives
•	Simulate realistic interview scenarios in a web browser with minimal setup.
•	Dynamically render questions from preloaded sets (and AI-generated content in future phases).
•	Encourage self-paced practice and enable users to review and improve their responses.
•	Provide a scalable, modular codebase using modern web development tools (React, Vite, TypeScript).
 



About Document File

This project documentation serves as a comprehensive reference for anyone installing, using, maintaining, or extending the AI Mock Interview Platform. It is structured to facilitate:
•	Academic evaluation and grading
•	Future enhancements or onboarding of new developers
•	Clear communication between design, development, and deployment teams
General Instructions
•	This document must be kept updated throughout the project lifecycle.
•	For each major version or release, a copy of this file should be backed up.


Software Tools Declaration

Tool/Dependency	          Purpose
Node.js (v18+)	JavaScript runtime for project
pnpm	Dependency management
Vite	Lightning-fast bundler
React	UI rendering engine
TypeScript	Type-safe JavaScript development
Tailwind CSS	Utility-first CSS framework
Visual Studio Code	IDE for development
Git + GitHub	Version control & collaboration





Project Technical Specifications

Project Stack Overview
•	Frontend: React + Vite
•	Language: TypeScript
•	Routing: react-router-dom
•	Styling: Tailwind CSS
•	State Management: React Hooks + Context API
•	API (Planned): Gemini API integration for real-time Q&A

The following points offers a comprehensive overview of how the project files and logic are organized across multiple functional domains such as components, pages, layouts, services, and core logic.

 Components & Logic 
These are reusable and functional modules:
•	Firebase Config: Initializes Firebase services.
•	Auth Handler: Manages sign-in and sign-out flow.
•	AI Interaction: Abstract layer to connect with external AI APIs like OpenAI.
•	Mock Interview Form: UI & logic for taking user inputs during interview session.
•	Video/Audio Recording: Captures candidate audio and video responses.
•	Questions & Transcript: Displays questions and optionally shows transcripts.
•	Feedback Modal: UI modal that shows AI-based feedback.
•	Save Session Modal: Allows user to save or discard a session.
•	Toast Provider: Notification system used across components.
•	Helpers & Utilities: String/validation/date helpers.
•	UI Primitives: Button, card, modal etc. styled components.
•	Auxiliary Scripts: One-off utilities or external script loaders.
•	Type Definitions: Common interfaces and enums.

 Layouts 
Wrapper UIs used across pages:
•	Auth Layout: Used on Sign-in/Sign-up flows.
•	Protected Route: Ensures only authenticated users can access certain pages.
•	Main App Layout: Wrapper for core dashboard and interview page.
•	Public Layout: Used for home and landing page.

 Routes 
App screens mapped to specific routes:
•	Home Page: Landing page for all users.
•	Sign In / Sign Up: Authentication routes.
•	Dashboard: Post-login interface with past sessions.
•	Mock Interview Flow: Main screen showing question by question.
•	Loading Pages: Placeholder UI for transitions.
•	Create/Edit Session: Allows a user to start a new session or edit an old one.
•	Feedback View: Dedicated page showing AI feedback.

 Core Logic & API Flow 
Central logic and communication flow:
•	Entry Point: main.tsx file initializes the app.
•	HTML Template: Contains the root div, meta tags, etc.
•	Invoke Functions:
o	Uses browser APIs like Web Speech API to process voice.
o	Communicates with AI (planned: OpenAI API) using Fetch.
•	Firebase:
o	Reads/writes session data.
o	Handles auth state and user history.

Unit Testing or Basic Testing Steps
Unit Testing or Basic Testing Steps
 To Verify Successful Setup
This verifies if the application launches and routes function as expected:
# Install dependencies (if not already)
$ npm install

# Start the development server
$ npm run dev

# Open the browser to view the app
http://localhost:5173
•	Confirm console has no runtime errors.
•	Ensure Tailwind styles are correctly loaded.
•	Verify main app layout loads: navigation bar, footer, etc.


Test Cases to Run (Manual Functional Testing)

Navigation Flow
•	Launch the app → Navigate to Home Page → Sign In or Start Interview (if available).
•	Navigate to Interview Page and click through questions.
•	Submit each answer and proceed to the next question.
•	After final question, check if the Summary Page displays all answers accurately.


UI/UX Validations
•	All buttons (Next, Submit, Save Session) are clickable and responsive.
•	Form inputs accept valid content and reject empty submissions.
•	Transitions between components (fade/slide) occur smoothly.
•	Toast/alert messages appear for actions like submission/save.
State & Context
•	Answers are stored persistently in context until the session is closed or refreshed.
•	Navigating back to previous questions retains previously submitted answers (if supported).
•	Confirm session modals work properly: Save, Cancel, Feedback Modal.
Conditional Rendering
•	Interview session should not proceed if no category is selected.
•	Feedback section remains disabled if no answer is submitted.

Tools Used for Manual & Performance Testing
         Tool	            Usage Purpose
Chrome DevTools	Inspect elements, network requests, console
Lighthouse	Performance scoring (SEO, PWA readiness)



1. Manual UI Testing 
Area	What to Test
Routing	Visit routes: /generate, /generate/interview/:id, /feedback/:id
Component Render	Check that RecordAnswer, QuestionSection, etc., render correctly
Webcam Toggle	On MockLoadPage, toggle webcam on/off — does preview show/hide?
Play Question Button	Click audio icon — does text-to-speech work?
Recording Button	Test if webcam/mic permissions trigger correctly
Feedback Page	Do expected/user answers and rating display accurately?
Tools: Chrome browser (F12), no extra setup needed.

2. Run Lighthouse (for Performance & SEO Audit)
Steps:
1.	Open the app in Chrome.
2.	Right-click → Inspect → go to Lighthouse tab.
3.	Select "Desktop" or "Mobile" → Click Generate report.
Insights we got:
 
Key Component-Level Deep Dive: 


1.) RecordAnswer.tsx
This section provides an exhaustive technical breakdown of the RecordAnswer component in the AI Mock Interview platform. This component is central to collecting user responses, transcribing speech to text, generating feedback using an AI model (Gemini 2.0 Flash), and saving interview data to Firestore.

 Component Name
RecordAnswer
 File Location
src/components/RecordAnswer.tsx
 Functional Objectives
•	Access device microphone and webcam
•	Capture user’s verbal answer via real-time speech-to-text
•	Process the answer and compare it with the expected answer using Gemini 2.0 Flash (via chatSession abstraction)
•	Parse structured AI-generated feedback (rating + suggestions)
•	Allow users to retry, edit, and save answers into Firebase Firestore database
•	Display interactive feedback UI for enhanced interview simulation

1.1  Props Description
interface RecordAnswerProps {
  question: {
    question: string; // The question text
    answer: string;   // Correct answer expected
  };
  isWebCam: boolean;              // Whether webcam feed is visible
  setIsWebCam: (val: boolean) => void; // Setter to toggle webcam
}

1.2  useSpeechToText Hook
Used to transcribe user voice into written text in real-time.

const {
  interimResult,
  isRecording,
  results,
  startSpeechToText,
  stopSpeechToText,
} = useSpeechToText({ continuous: true, useLegacyResults: false });

•	interimResult: current incomplete transcription
•	results: finalized transcription segments (array of objects with transcript field)
•	isRecording: boolean state indicating active mic session
•	startSpeechToText(): begins microphone access
•	stopSpeechToText(): terminates recording

1.3  State Management

const [userAnswer, setUserAnswer] = useState("");
const [aiResult, setAiResult] = useState<AIResponse | null>(null);
const [isAiGenerating, setIsAiGenerating] = useState(false);
const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);
•	userAnswer: captures the full typed or spoken answer
•	aiResult: stores { feedback, ratings } object returned by AI
•	open: modal visibility for save confirmation
•	loading: loader state for database operation

1.4 Side Effect - Combine Transcripts
useEffect(() => {
  const combineTranscripts = results
    .filter((r): r is ResultType => typeof r !== "string")
    .map((r) => r.transcript)
    .join(" ");

  setUserAnswer(combineTranscripts);
}, [results]);
This hook combines finalized transcription chunks and updates the answer input field.

1.5 Core Functional Blocks
recordUserAnswer()
Handles toggle recording logic + input validation + AI feedback generation.
if (isRecording) {
  stopSpeechToText();
  if (userAnswer.length < 30) { toast.error(...); return; }
  const aiResult = await generateResult(...);
  setAiResult(aiResult);
} else {
  startSpeechToText();
}
generateResult()
•	Constructs a prompt with question, correct answer, and user answer
•	Sends it to chatSession.sendMessage() (Gemini 2.0)
•	Parses the feedback JSON string using cleanJsonResponse()
•	Returns object: { ratings: number; feedback: string }
cleanJsonResponse()
let cleanText = responseText.trim().replace(/(json|```|`)/g, "");
return JSON.parse(cleanText);
Ensures messy AI output is sanitized before parsing.
recordNewAnswer()
Clears the previous answer, resets state, and restarts voice capture.
saveUserAnswer()
•	Queries Firestore to check for duplicate entry
•	If unique, saves answer + feedback + metadata into userAnswers collection
•	Uses addDoc() and serverTimestamp() from Firebase

1.6 UI Elements Breakdown

Webcam Preview
{isWebCam ? <WebCam ... /> : <WebcamIcon />}
•	WebCam component displays live webcam feed using getUserMedia()
•	WebcamIcon shows a placeholder icon when webcam is disabled
Button Panel (TooltipButton)
<TooltipButton icon={<Mic />} onClick={recordUserAnswer} />
Actions include:
•	🎥 Toggle webcam
•	🎙 Start/stop voice input
•	🔁 Retry
•	💾 Save (with loader when isAiGenerating is true)
Answer Input Section
<textarea value={userAnswer} onChange={...} />
<p>{interimResult}</p>
•	Displays editable textbox for typed or transcribed input
•	Live interim transcription appears as helper text


Save Modal (SaveModal)
<SaveModal
  isOpen={open}
  onClose={() => setOpen(false)}
  onConfirm={saveUserAnswer}
  loading={loading}
/>


Component Internals:
This modal is built using a combination of:
•	Modal (base reusable component for modals)
•	Button components for actions (Cancel / Continue)





Props in Detail:
Prop	Type	Description
isOpen	boolean	Toggles modal visibility
onClose	() => void	Function triggered when Cancel is clicked or modal dismissed
onConfirm	() => void	Function triggered on Continue. It calls saveUserAnswer()
loading	boolean	If true, disables both buttons and optionally shows loading feedback
Usage:
Used to prompt the user before committing data to Firestore. Prevents accidental saves and ensures that the user explicitly confirms the action.
Visual Layout:
<Modal title="Are you sure?"
  description="This action cannot be undone you can't edit or re-answer this question again!"
  isOpen={isOpen}
  onClose={onClose}>
  <div className="pt-6 space-x-2 flex items-center justify-end w-full">
    <Button disabled={loading} variant="outline" onClick={onClose}>
      Cancel
    </Button>
    <Button
      disabled={loading}
      className="bg-emerald-600 hover:bg-emerald-800"
      onClick={onConfirm}>
      Continue
    </Button>
  </div>
</Modal>

Why This Matters:
•	Prevents unintentional saving of poorly formed or test answers
•	Delivers UX transparency—users know what’s about to happen
•	loading disables inputs during async DB writes, ensuring double submission protection
•	Clear modal structure allows future maintainers to replace content with other logic (e.g., delete confirmation)
Can easily be abstracted and reused across other features like delete confirmation, publish confirmation, etc.. The additional loader improves UX by clearly communicating backend activity.




1.7 External Dependencies & Roles
Library	Purpose
react-hook-speech-to-text	Converts microphone input to text
@clerk/clerk-react	Auth context: fetches user ID
firebase/firestore	Persisting user responses in Firestore
react-router-dom	Get interviewId from URL params
sonner	Non-blocking UI toast messages
lucide-react	Icon set for buttons
react-webcam	Camera feed rendering


1.8 Gemini 2.0 Flash - AI Feedback Generation
Gemini is responsible for:
•	Comparing user’s spoken response to the correct one
•	Generating a numerical rating (1–10)
•	Writing detailed feedback on strengths, weaknesses, suggestions
Prompt format sent:
Question: "..."
User Answer: "..."
Correct Answer: "..."
Please compare and return:
{
  "ratings": number,
  "feedback": string
}
•	Prompt is well-structured to guide Gemini into returning JSON-compliant feedback
•	Cleaner AI parsing allows immediate integration in UI and DB

 Testing Matrix: RecordAnswer Component
    Feature	             Expected Result
Voice Input	Answer gets transcribed and visible in textarea
Webcam	Camera permission and live preview
Record	Mic starts/stops, interim result is visible
AI Feedback	Gemini returns rating + suggestion in JSON format
Save	Answer gets stored in Firebase
Retry	Clears answer and restarts mic session
Validation	Short answers (< 30 char) trigger warning

 
2.) FormMockInterview.tsx
This section provides a comprehensive technical breakdown of the FormMockInterview component, which powers the mock interview creation and editing interface. This form plays a crucial role in capturing user input, validating it using Zod, generating AI-based interview questions using a prompt engineering strategy, and storing the final result in Firebase Firestore.

Component Name
FormMockInterview
File Location
src/components/FormMockInterview.tsx
Functional Objectives
•	Create or edit mock interviews
•	Validate form using Zod schema and React Hook Form
•	Send form data to AI model to generate mock questions & answers
•	Clean and parse JSON response from AI
•	Store interview with metadata in Firestore
•	Show user feedback using toast notifications
•	Navigate user on successful submission

2.1 Props Description
interface FormMockInterviewProps {
  initialData: Interview | null;
}
•	initialData: If present, the form will load with this data (for editing an existing interview)


2.2 Form Schema (Zod)
const formSchema = z.object({
  position: z.string().min(1).max(100),
  description: z.string().min(10),
  experience: z.coerce.number().min(0),
  techStack: z.string().min(1),
});
Ensures:
•	position: required string
•	description: at least 10 characters
•	experience: coerced to number and >= 0
•	techStack: not empty

2.3 State & Form Initialization
const form = useForm<FormData>({...})
const [loading, setLoading] = useState(false);
•	form: manages the form state using react-hook-form
•	loading: disables UI on submission

2.4 AI Prompt Engineering and Evaluation Logic

Prompt Template Used
As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

[
  { "question": "<Question text>", "answer": "<Answer text>" },
  ...
]

Job Information:
- Job Position: ${data?.position}
- Job Description: ${data?.description}
- Years of Experience Required: ${data?.experience}
- Tech Stacks: ${data?.techStack}

The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
Why this Prompt Works
•	Role Play Strategy: The prompt frames the AI as an “experienced prompt engineer,” establishing the persona and expertise.
•	Explicit Format: JSON schema with named keys (question, answer) ensures structural consistency.
•	Concrete Input Context: Injects dynamic fields like job title, years of experience, and tech stack.
•	Output Control: Clearly instructs to avoid extra labels or code blocks—reduces chances of malformed output.
Cleaning the AI Response
cleanText = responseText.replace(/(json|```|`)/g, "");
const match = cleanText.match(/\[.*\]/s);
return JSON.parse(match[0]);
•	Trims markdown wrappers like ```json...
•	Extracts array portion using regex \[.*\]
•	Parses JSON using JSON.parse
Summary
The combination of prompt clarity, persona establishment, and schema enforcement makes this a reliable, repeatable method to dynamically generate questions and answers for diverse technical roles.

2.5 Form Submission Logic: onSubmit(data)
if (initialData) {
  await updateDoc(...);
} else {
  await addDoc(...);
}
•	If editing: update document by ID
•	If creating: add a new document
•	Attach questions from AI, userId, and timestamps
•	Navigate to /generate on success

2.6 UI Layout

Header
•	CustomBreadCrumb: shows current page context
•	Headings: Title based on whether editing or creating
•	Trash2: Icon button for deletion (not yet functional)
Form Fields
Each field is wrapped using FormField:
•	Position (Input)
•	Description (Textarea)
•	Experience (Input type='number')
•	Tech Stack (Textarea)
All fields are responsive and have clear label-message grouping.

 Buttons
<Button type="reset">Reset</Button>
<Button type="submit">{loading ? <Loader /> : actions}</Button>
Disabled if form is invalid or loading.



2.7 useEffect Hook for Form Reset
useEffect(() => {
  if (initialData) {
    form.reset({ ... });
  }
}, [initialData]);
Ensures form updates if new props arrive.


2.8 External Dependencies & Roles
  Library	            Role
react-hook-form	Form state and validation
zod	Schema validation
firebase/firestore	Create/update interview docs
@clerk/clerk-react	Get userId
sonner	Show toast feedback
lucide-react	Icon for delete button
react-router-dom	Navigate after form submission
chatSession abstraction	Send prompt and receive AI output




Testing Matrix: FormMockInterview Component
           Feature	           Expected Result
Form Rendering	All inputs visible with placeholder
Validation	Invalid inputs show inline error
Save/Update	Submits to Firestore with AI questions
Reset	Resets form to initial state
Navigation	Redirects to /generate after save
AI Integration	5 questions generated by AI, formatted properly
Editing existing	Loads pre-filled values using initialData


3.) QuestionSection.tsx
This section explores the logic and purpose of the QuestionSection component. This interface allows users to interact with the AI-generated interview questions by reading them out loud and recording their answers using their webcam.

Component Name
QuestionSection
File Location
src/components/QuestionSection.tsx
Functional Objectives
•	Display a tabbed interface of interview questions
•	Let users play question text using browser's SpeechSynthesis API
•	Allow webcam-based answer recording for each question

3.1 Props Description
interface QuestionSectionProps {
  questions: { question: string; answer: string }[];
}
•	questions: List of questions and answers generated from AI



3.2 Internal State
const [isPlaying, setIsPlaying] = useState(false);
const [isWebCam, setIsWebCam] = useState(false);
const [currentSpeech, setCurrentSpeech] = useState<SpeechSynthesisUtterance | null>(null);
•	isPlaying: Tracks if speech is currently being spoken
•	isWebCam: Tracks if webcam recording is enabled
•	currentSpeech: Holds the current speech instance to control stop/start

3.3  Speech Playback Logic
const handlePlayQuestion = (qst: string) => {
  if (isPlaying && currentSpeech) {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentSpeech(null);
  } else {
    const speech = new SpeechSynthesisUtterance(qst);
    window.speechSynthesis.speak(speech);
    setIsPlaying(true);
    setCurrentSpeech(speech);

    speech.onend = () => {
      setIsPlaying(false);
      setCurrentSpeech(null);
    };
  }
};
•	Uses SpeechSynthesisUtterance to speak the question aloud
•	Manages playback toggle via isPlaying
•	Automatically resets state when speech ends
Why It Works
•	The browser's built-in speechSynthesis API is a stable and widely supported feature.
•	Using speech.onend ensures we track the end of speech and update the UI accordingly.
•	Canceling an ongoing speech ensures clear UX without overlapping sounds.

3.4 UI Layout
Vertical Tabs for Questions
<Tabs orientation="vertical" ... >
  <TabsList> [...TabsTrigger] </TabsList>
  <TabsContent> [...Question/Answer section] </TabsContent>
</Tabs>
•	Tabs are created per question (Question #1, Question #2, etc.)
•	Each tab shows the corresponding question and its answer
Play Button Logic
<TooltipButton onClick={() => handlePlayQuestion(tab.question)}>
  {isPlaying ? <VolumeX /> : <Volume2 />}
</TooltipButton>

•	Dynamically switches between play/stop icons based on isPlaying
•	Tooltip label switches from "Start" to "Stop"

Webcam Answer Recording
<RecordAnswer
  question={tab}
  isWebCam={isWebCam}
  setIsWebCam={setIsWebCam}
/>

•	Passes props to RecordAnswer which handles camera logic
•	isWebCam state shared to control open/close

3.5 Dependencies & Roles
Dependency	Purpose
SpeechSynthesis (Web)	Used to read questions aloud
RecordAnswer	Handles webcam interaction
lucide-react	Icons for play/stop (Volume2, VolumeX)
@/components/ui/tabs	Tab system for switching questions
TooltipButton	Provides tooltip + icon button UX

Testing Matrix: QuestionSection Component
Feature	Expected Result
Speech Playback	Starts and stops correctly, updates button/icon
Record Answer	Opens webcam UI, records based on user trigger
Tab Switching	Changes visible question based on active tab
Dynamic Rendering	Supports any number of AI-generated Q&A pairs


4.)  Feedback.tsx
Component Name
Feedback
File Location
src/components/Feedback.tsx
Functional Objective
Renders the feedback page for a user's mock interview attempt. It:
•	Fetches interview metadata from Firestore
•	Fetches AI-generated feedback per question from Firestore
•	Displays a UI with overall rating and question-wise breakdown

4.1  Route Behavior
•	Route param: interviewId is read from URL via useParams
•	If absent, user is redirected to /generate

4.2  Internal State
const [interview, setInterview] = useState<Interview | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [feedbacks, setFeedbacks] = useState<UserAnswer[]>([]);
const [activeFeed, setActiveFeed] = useState("");
•	interview: metadata of the selected interview
•	feedbacks: AI-evaluated user answers per question
•	activeFeed: currently opened accordion feedback
•	isLoading: UI loading state while fetching data

4.3  Firestore Fetch Logic
fetchInterview
const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
•	Pulls a single Interview document by ID
•	Sets state with the parsed result
fetchFeedbacks
const querSanpRef = query(
  collection(db, "userAnswers"),
  where("userId", "==", userId),
  where("mockIdRef", "==", interviewId)
);
const querySnap = await getDocs(querSanpRef);
•	Pulls all UserAnswer docs matching both the current user and mockId
•	All results are mapped into a UserAnswer[]

4.4  Rating Calculation
const overAllRating = useMemo(() => {
  const totalRatings = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
  return (totalRatings / feedbacks.length).toFixed(1);
}, [feedbacks]);
•	Dynamically computes average rating (e.g., 7.5/10) when feedbacks change

4.5  Rendered UI
BreadCrumb
<CustomBreadCrumb breadCrumpItems={[...]}/>
•	Navigational context from Mock Interview list → Interview → Feedback
Headings & Interview Metadata
<Headings title="Congratulations !" description="..." />
<InterviewPin interview={interview} onMockPage />

Overall Rating
<p>Your overall interview ratings : <span>{overAllRating} / 10</span></p>

Accordion: Per-Question Feedback
<Accordion>
  {feedbacks.map((feed) => (
    <AccordionItem key={feed.id}>
      <AccordionTrigger>{feed.question}</AccordionTrigger>
      <AccordionContent>
        <Card>Expected Answer</Card>
        <Card>Your Answer</Card>
        <Card>Feedback</Card>
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
•	Each question appears in a collapsible card
•	Displays: Expected (correct) answer, user's answer, AI feedback
•	Uses formatBoldUnderline() to highlight keywords

4.6  Dependencies & Roles
Dependency	                    Purpose
firebase/firestore	Fetches interview & feedback documents
@clerk/clerk-react	Fetches authenticated userId
react-router-dom	Extracts URL params and handles redirection
sonner	Displays toast notifications on failure
Accordion, Card UI	Used for visually organizing question-wise feedback
CustomBreadCrumb	Navigational context above content
formatBoldUnderline()	Highlighting logic for keyword formatting in responses



Why This Feedback Logic Works
•	useEffect ensures data is fetched only after component mounts
•	Firestore queries use efficient filtering with .where() clauses
•	Accordion UI offers intuitive way to explore feedback per question
•	Errors are caught and shown to user with toast notifications




Testing Matrix: Feedback Component

        Feature	         Expected Result
Fetch Interview Metadata	Loads position, techStack, questions correctly
Fetch User Feedback	Pulls all feedback documents via Firestore query
Show Overall Rating	Calculates accurate average from feedback ratings
Accordion Toggle	Expands/collapses individual feedback items
Display Answer Comparison	Shows correct, user, and feedback blocks clearly


 

5. MockInterviewPage.tsx

Component Name
MockInterviewPage
File Location
src/components/MockInterviewPage.tsx
Functional Objective
Displays the actual mock interview screen where users see all questions, are instructed to record answers, and proceed with the mock. It fetches interview data from Firestore and passes it to the QuestionSection.

5.1 Route Behavior
•	Reads interviewId param from the URL using useParams
•	Redirects to /generate if missing or interview doesn't exist

5.2 Internal State
const [interview, setInterview] = useState<Interview | null>(null);
const [isLoading, setIsLoading] = useState(false);
•	interview: Holds the fetched interview metadata
•	isLoading: Boolean for showing loader until fetch is complete


5.3 Firestore Data Fetch
const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
•	On component mount, fetches the interview document using Firestore's getDoc
•	If not found, redirects the user


5.4 Rendered UI Structure
Breadcrumb Navigation
<CustomBreadCrumb breadCrumpItems={[...]}/>
•	Provides contextual path: Mock Interviews > Interview > Start
Instructional Alert
<Alert>
  <Lightbulb />
  <AlertTitle>Important Note</AlertTitle>
  <AlertDescription>
    Instructions for the user: record your answers, feedback comes after.
  </AlertDescription>
</Alert>
•	Clarifies the interview process and privacy assurance
Interview Questions
<QuestionSection questions={interview.questions} />
•	Renders tabbed question view + recording feature using the QuestionSection component

5.5 Dependencies & Utilities
   Dependency	                         Purpose
firebase/firestore	Fetch interview document from Firestore
react-router-dom	Route param extraction and navigation control
LoaderPage	Loading spinner while fetching interview
Alert	UI component to display user tips
QuestionSection	Main question tab UI with recording capability
CustomBreadCrumb	Navigation trail across app

Why This Interview Page Design Works
•	useEffect ensures Firestore is only queried when interviewId is available
•	Fails gracefully by navigating if data is missing or broken
•	Combines Alert, QuestionSection, and BreadCrumb for complete user experience
•	Prevents flashing with conditional loader (isLoading)

Testing Matrix: MockInterviewPage

Feature	              Expected Result
Fetch Interview Metadata	Loads questions, position, and tech stack
Breadcrumb Navigation	Correct route hierarchy is shown
Missing Interview ID	Redirects user to /generate safely
Display Instruction Note	Shows tips and privacy info using Alert
Render Questions Section	Renders QuestionSection with recording and tabs

6. ) MockLoadPage.tsx
Component Name
MockLoadPage
File Location
src/components/MockLoadPage.tsx
Functional Objective
Displays a pre-interview preparation page. It fetches interview data from Firestore and presents:
•	Breadcrumb
•	Start button
•	Instructional alert
•	Option to toggle webcam preview using react-webcam

6.1 Route Behavior
•	Reads interviewId from URL
•	Redirects to /generate if interview doesn't exist

6.2 Internal State
const [interview, setInterview] = useState<Interview | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);
•	interview: fetched metadata
•	isWebCamEnabled: toggles webcam display
•	isLoading: controls loader view

6.3 Firestore Data Fetch
const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
•	Fetches metadata on mount using useEffect
•	Redirects if not found
6.4 Rendered UI Structure

Breadcrumb Navigation + Start CTA
<CustomBreadCrumb ... />
<Link to={`/generate/interview/${interviewId}/start`}>
  <Button>Start <Sparkles /></Button>
</Link>

Instructional Alert
<Alert>
  <Lightbulb />
  <AlertTitle>Important Information</AlertTitle>
  <AlertDescription>Webcam note and response guide</AlertDescription>
</Alert>

Webcam Preview
{isWebCamEnabled ? <WebCam ... /> : <WebcamIcon />}
<Button onClick={...}>{isWebCamEnabled ? 'Disable' : 'Enable'} Webcam</Button>
•	Toggles webcam using react-webcam

Why This Pre-Interview Page Works
•	Clear preview before starting interview
•	Proper error handling with redirect logic
•	State-driven webcam toggle with fallback icon
•	Effective user messaging via Alert box



Testing Matrix: MockLoadPage
Feature	Expected Result
Breadcrumb Navigation	Shows interview path + CTA Start button
Toggle Webcam	Turns webcam preview on/off with UI fallback icon
Missing Interview ID	Redirects user to /generate
Instructional Message	Alert box provides webcam usage and safety notice







Type Definitions
This section documents the global TypeScript interfaces used across the application. These types ensure type safety and consistent structure when interacting with Firestore or component props.
File Location
src/types/index.ts (assumed from usage)

1.)  User
export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: Timestamp | FieldValue;
  updateAt: Timestamp | FieldValue;
}
•	Represents a registered user in the system.
•	createdAt and updateAt support both server timestamps (Firestore) and client-generated values.

2.)  Interview
export interface Interview {
  id: string;
  position: string;
  description: string;
  experience: number;
  userId: string;
  techStack: string;
  questions: { question: string; answer: string }[];
  createdAt: Timestamp;
  updateAt: Timestamp;
}
•	Used to represent a mock interview created by a user.
•	Includes AI-generated questions array.
•	Links to the user via userId.

3.)  UserAnswer
export interface UserAnswer {
  id: string;
  mockIdRef: string;
  question: string;
  correct_ans: string;
  user_ans: string;
  feedback: string;
  rating: number;
  userId: string;
  createdAt: Timestamp;
  updateAt: Timestamp;
}
•	Represents a user's submitted answer to an interview question.
•	References the original mock interview via mockIdRef.
•	Stores both the correct answer and user’s answer, along with AI-generated feedback and a rating.



















References
Below is a curated list of tools, frameworks, libraries, and documentation used to build and support the AI Mock Interview Platform. These references are critical for developers wishing to understand the technological foundation of the project and serve as learning resources for future enhancements.

Core Frameworks and Tools
•	Project Repository (Codebase):  Contains the complete codebase, including components, routes, utilities, context, and future AI integration hooks.
•	React: https://react.dev — JavaScript library for building user interfaces. This project utilizes React with hooks and functional components.
•	Vite: https://vitejs.dev — A modern build tool that offers fast bundling, instant server startup, and hot module replacement.
•	TypeScript: https://www.typescriptlang.org/docs/handbook/intro.html — A statically typed superset of JavaScript used to ensure reliability and scalable code in large applications.
 UI/Styling & Frontend Support
•	Tailwind CSS: https://tailwindcss.com/docs — Utility-first CSS framework used to style all components with minimal custom CSS.
•	React Router: https://reactrouter.com — Provides routing capabilities like useNavigate, Routes, Link, and nested layouts in SPA structure.

