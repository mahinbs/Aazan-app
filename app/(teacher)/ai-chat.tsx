import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const QUICK_ACTIONS = [
    { id: '1', label: 'Schedule Meet', icon: 'calendar' },
    { id: '2', label: 'Change Webinar Time', icon: 'time' },
    { id: '3', label: 'Explore Topics', icon: 'bulb' },
    { id: '4', label: 'Clear Doubts', icon: 'help-circle' },
];

const MOCK_MESSAGES = [
    { id: '1', text: 'Hello Professor! I am Aazaan AI — your teaching assistant. I can help you schedule meetings, manage webinars, explore teaching topics, and clear your doubts. How can I assist you today? 🎓', sender: 'ai' },
    { id: '2', text: 'I need to reschedule my Quantum Physics webinar to next Friday.', sender: 'user' },
    { id: '3', text: 'Sure! I\'ve noted the schedule change for your "Quantum Physics Masterclass" to next Friday. Would you like me to notify enrolled students about the time change? I can also suggest optimal time slots based on student availability.', sender: 'ai' },
];

export default function TeacherAIChat() {
    const [messages, setMessages] = useState(MOCK_MESSAGES);
    const [inputText, setInputText] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
    const router = useRouter();

    const handleSend = (text?: string) => {
        const msgText = text || inputText;
        if (!msgText.trim()) return;
        const userMsg = { id: Date.now().toString(), text: msgText, sender: 'user' };
        const responses: Record<string, string> = {
            'Schedule Meet': 'I can help you schedule a new meeting. Please provide the following details:\n\n📅 Date & Time\n👥 Expected attendees\n📝 Meeting topic\n\nOr would you like me to suggest available slots?',
            'Change Webinar Time': 'Which webinar would you like to reschedule?\n\n1. Quantum Physics Masterclass (Today, 6:00 PM)\n2. Calculus Advanced (Feb 26, 10:00 AM)\n\nSelect a webinar or describe the change.',
            'Explore Topics': 'Here are trending topics in your subject areas:\n\n🔬 Physics: Quantum Computing Basics, String Theory Simplified\n📐 Mathematics: Applied Data Science, Game Theory\n\nWould you like me to help prepare materials for any of these?',
            'Clear Doubts': 'Of course! I\'m here to help with any academic or platform-related questions. What would you like to know about?',
        };
        const aiText = responses[msgText] || `I understand your request about "${msgText}". Let me help you with that. I can set up the necessary arrangements and notify relevant students. Would you like me to proceed?`;
        const aiResponse = { id: (Date.now() + 1).toString(), text: aiText, sender: 'ai' };
        setMessages([...messages, userMsg, aiResponse]);
        setInputText('');
    };

    const handleVoiceInput = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            setTimeout(() => {
                setInputText('Schedule a doubt clearing session for tomorrow');
                setIsRecording(false);
            }, 2000);
        }
    };

    const handleSpeakMessage = (msgId: string) => {
        if (speakingMessageId === msgId) {
            setSpeakingMessageId(null);
            return;
        }
        setSpeakingMessageId(msgId);
        setTimeout(() => setSpeakingMessageId(null), 3000);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.teal} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Aazaan AI</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.8)">Teaching Assistant • Voice Enabled</AppText>
                        </View>
                        <TouchableOpacity style={styles.historyBtn}>
                            <Ionicons name="time-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    {QUICK_ACTIONS.map((action) => (
                        <TouchableOpacity
                            key={action.id}
                            style={styles.actionChip}
                            onPress={() => handleSend(action.label)}
                            activeOpacity={0.7}
                        >
                            <Ionicons name={action.icon as any} size={14} color={Colors.secondary.teal} />
                            <AppText variant="label" style={styles.actionLabel}>{action.label}</AppText>
                        </TouchableOpacity>
                    ))}
                </View>

                {messages.map((msg) => (
                    <View key={msg.id} style={[styles.messageWrapper, msg.sender === 'user' ? styles.userWrapper : styles.aiWrapper]}>
                        <AppCard
                            variant={msg.sender === 'user' ? 'navy' : 'default'}
                            style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.aiBubble]}
                        >
                            <AppText
                                variant="body"
                                color={msg.sender === 'user' ? '#FFF' : Colors.text.primary}
                                style={{ fontSize: 15, lineHeight: 22 }}
                            >
                                {msg.text}
                            </AppText>
                            {msg.sender === 'ai' && (
                                <TouchableOpacity
                                    style={[styles.speakerBtn, speakingMessageId === msg.id && styles.speakerBtnActive]}
                                    onPress={() => handleSpeakMessage(msg.id)}
                                >
                                    <Ionicons
                                        name={speakingMessageId === msg.id ? 'volume-high' : 'volume-medium'}
                                        size={16}
                                        color={speakingMessageId === msg.id ? Colors.secondary.teal : Colors.text.muted}
                                    />
                                    <AppText
                                        variant="label"
                                        style={{ fontSize: 9, marginLeft: 4 }}
                                        color={speakingMessageId === msg.id ? Colors.secondary.teal : Colors.text.muted}
                                    >
                                        {speakingMessageId === msg.id ? 'SPEAKING...' : 'LISTEN'}
                                    </AppText>
                                </TouchableOpacity>
                            )}
                        </AppCard>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputArea}>
                <AppCard variant="elevated" style={styles.inputCard}>
                    {isRecording && (
                        <View style={styles.recordingBar}>
                            <View style={styles.recordingDot} />
                            <AppText variant="label" color="#EF4444" style={{ fontSize: 10 }}>
                                LISTENING TO YOUR VOICE...
                            </AppText>
                        </View>
                    )}
                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder="Ask about scheduling, topics..."
                            style={styles.input}
                            value={inputText}
                            onChangeText={setInputText}
                            placeholderTextColor={Colors.text.muted}
                        />
                        <TouchableOpacity
                            style={[styles.micBtn, isRecording && styles.micBtnActive]}
                            onPress={handleVoiceInput}
                        >
                            <Ionicons
                                name={isRecording ? 'radio-button-on' : 'mic'}
                                size={20}
                                color={isRecording ? '#EF4444' : Colors.text.muted}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]}
                            onPress={() => handleSend()}
                            disabled={!inputText.trim()}
                        >
                            <LinearGradient colors={['#1FB5A9', '#169C91']} style={styles.sendGradient}>
                                <Ionicons name="paper-plane" size={20} color="#FFF" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </AppCard>
                <SafeAreaView edges={['bottom']} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    topArea: {
        paddingBottom: 25,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 15,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
    },
    historyBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickActions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 20,
    },
    actionChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary.aquaLight,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 6,
        borderWidth: 1,
        borderColor: Colors.secondary.aqua,
    },
    actionLabel: {
        fontSize: 11,
        color: Colors.secondary.teal,
        fontWeight: '600',
    },
    chatContent: {
        padding: 24,
        paddingBottom: 120,
    },
    messageWrapper: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
    },
    userWrapper: {
        justifyContent: 'flex-end',
    },
    aiWrapper: {
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 15,
        borderRadius: 20,
        marginBottom: 0,
    },
    userBubble: {
        borderBottomRightRadius: 4,
    },
    aiBubble: {
        borderBottomLeftRadius: 4,
    },
    speakerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
    },
    speakerBtnActive: {
        borderTopColor: Colors.secondary.aquaLight,
    },
    inputArea: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    inputCard: {
        padding: 6,
        borderRadius: 20,
        marginBottom: 0,
    },
    recordingBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        gap: 6,
    },
    recordingDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#EF4444',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
        paddingLeft: 15,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        fontSize: 15,
        color: Colors.text.primary,
    },
    micBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    micBtnActive: {
        backgroundColor: '#FEE2E2',
    },
    sendBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        overflow: 'hidden',
    },
    sendGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBtnDisabled: {
        opacity: 0.5,
    },
});
