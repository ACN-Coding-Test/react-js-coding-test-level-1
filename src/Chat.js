import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
    background: "#f5f8fb",
    fontFamily:
        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    headerBgColor: "#000",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#000",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
};

const steps = [
    {
        id: "1",
        message: "What is your name?",
        trigger: "2",
    },
    {
        id: "2",
        user: true,
        trigger: "3",
    },
    {
        id: "3",
        message: "Hi {previousValue}, nice to meet you!",
        end: true,
    },
];

const Chat = () => {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Chat Bot"
                recognitionEnable={true}
                speechSynthesis={{ enable: true, lang: "en" }}
                floating={true}
                steps={steps}
            />
        </ThemeProvider>
    );
};

export default Chat;
