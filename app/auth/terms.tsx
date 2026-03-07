import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const TERMS_SECTIONS = [
    {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using the AAZAAN platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our Service. These terms apply to all users of the platform, including students, teachers, and visitors.',
    },
    {
        title: '2. User Accounts',
        content: 'You must register for an account to access most features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration and keep your account information updated.',
    },
    {
        title: '3. Student Responsibilities',
        content: 'As a student user, you agree to: (a) use the platform solely for educational purposes; (b) respect the intellectual property of teachers and content creators; (c) not share account credentials or session access with others; (d) provide honest feedback and ratings; (e) make payments for sessions and webinars promptly.',
    },
    {
        title: '4. Teacher Responsibilities',
        content: 'As a teacher/expert user, you agree to: (a) provide accurate information about your qualifications and expertise; (b) deliver quality educational content during sessions; (c) maintain professional conduct at all times; (d) respect student privacy and data; (e) adhere to scheduled session times and commitments.',
    },
    {
        title: '5. Payment & Refunds',
        content: 'All payments are processed securely through our payment partners. Session fees, webinar charges, and subscription costs are clearly displayed before purchase. Refund requests must be submitted within 24 hours of a session. AAZAAN retains a platform fee from teacher earnings as disclosed during registration.',
    },
    {
        title: '6. AI Features & Data Usage',
        content: 'Our Aazaan AI features use your input data (text, voice, images) to provide educational assistance. Your data is processed securely and not shared with third parties. AI responses are for educational guidance only and should not replace professional academic advice. We continuously improve our AI based on anonymized usage patterns.',
    },
    {
        title: '7. Referral Program',
        content: 'The AAZAAN referral program rewards users for inviting new members. Students earn a free 10-minute doubt clearing session for every 5 student referrals. Teachers earn 1 free webinar session for each teacher referral. Referral rewards are non-transferable and subject to verification. AAZAAN reserves the right to modify referral terms.',
    },
    {
        title: '8. Intellectual Property',
        content: 'All content on the AAZAAN platform, including but not limited to text, graphics, logos, and software, is the property of AAZAAN or its content creators. Users may not reproduce, distribute, or create derivative works without explicit permission.',
    },
    {
        title: '9. Privacy Policy',
        content: 'We collect and process personal data in accordance with our Privacy Policy. This includes your name, email, phone number, educational information, and usage data. We implement industry-standard security measures to protect your information.',
    },
    {
        title: '10. Termination',
        content: 'AAZAAN reserves the right to suspend or terminate accounts that violate these terms. Users may delete their accounts at any time through the app settings. Upon termination, access to purchased content may be revoked.',
    },
];

export default function TermsAndConditions() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Terms & Conditions</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.7)">Last updated: March 2026</AppText>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.introCard}>
                    <Ionicons name="shield-checkmark" size={28} color={Colors.secondary.teal} />
                    <AppText variant="body" style={styles.introText}>
                        Please read these terms carefully before using the AAZAAN platform. By creating an account, you acknowledge and accept all terms outlined below.
                    </AppText>
                </View>

                {TERMS_SECTIONS.map((section, index) => (
                    <View key={index} style={styles.section}>
                        <AppText variant="h3" style={styles.sectionTitle}>{section.title}</AppText>
                        <AppText variant="body" style={styles.sectionContent}>{section.content}</AppText>
                    </View>
                ))}

                <View style={styles.footerSection}>
                    <AppText variant="caption" style={styles.footerText}>
                        By using AAZAAN, you confirm that you have read, understood, and agree to these Terms and Conditions. For questions, contact support@aazaan.com
                    </AppText>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
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
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    introCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary.aquaLight,
        padding: 20,
        borderRadius: 20,
        marginBottom: 30,
        gap: 15,
    },
    introText: {
        flex: 1,
        color: Colors.text.secondary,
        lineHeight: 20,
        fontSize: 13,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 8,
        color: Colors.primary.dark,
    },
    sectionContent: {
        color: Colors.text.secondary,
        lineHeight: 22,
        fontSize: 14,
    },
    footerSection: {
        borderTopWidth: 1,
        borderTopColor: Colors.border.default,
        paddingTop: 20,
        marginTop: 10,
    },
    footerText: {
        textAlign: 'center',
        color: Colors.text.muted,
        lineHeight: 18,
    },
});
