import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const LANGUAGES = [
    'English', 'Hindi', 'Tamil', 'Telugu', 'Kannada',
    'Malayalam', 'Bengali', 'Urdu', 'Arabic', 'French', 'Spanish',
];

export default function ProfessionalSignup() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [expertise, setExpertise] = useState('');
    const [bio, setBio] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const toggleLanguage = (lang: string) => {
        setSelectedLanguages((prev) =>
            prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
        );
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <AppText variant="h2" color="#FFF" style={styles.title}>Expert Onboarding</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.7)">Join our elite academic ecosystem</AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <AppCard variant="elevated" style={styles.formCard}>
                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>FULL NAME & TITLE</AppText>
                        <TextInput
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="Dr. John Doe"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PROFESSIONAL EMAIL</AppText>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="john@faculty.edu"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PHONE NUMBER</AppText>
                        <View style={styles.phoneRow}>
                            <View style={styles.countryCode}>
                                <AppText variant="body" style={{ fontSize: 15 }}>+91</AppText>
                            </View>
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="9876543210"
                                style={[styles.input, { flex: 1 }]}
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PRIMARY EXPERTISE (e.g. Mathematics)</AppText>
                        <TextInput
                            value={expertise}
                            onChangeText={setExpertise}
                            placeholder="Theoretical Physics"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PROFESSIONAL BIO</AppText>
                        <TextInput
                            value={bio}
                            onChangeText={setBio}
                            placeholder="Describe your academic background and research..."
                            style={[styles.input, styles.textArea]}
                            multiline
                            numberOfLines={4}
                        />
                    </View>

                    {/* Known Languages */}
                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>KNOWN LANGUAGES</AppText>
                        <AppText variant="caption" style={styles.langHint}>
                            Select languages you can teach in — helps students learn in their mother tongue
                        </AppText>
                        <View style={styles.langGrid}>
                            {LANGUAGES.map((lang) => {
                                const isSelected = selectedLanguages.includes(lang);
                                return (
                                    <TouchableOpacity
                                        key={lang}
                                        style={[styles.langChip, isSelected && styles.langChipActive]}
                                        onPress={() => toggleLanguage(lang)}
                                        activeOpacity={0.7}
                                    >
                                        {isSelected && (
                                            <Ionicons name="checkmark-circle" size={14} color="#FFF" style={{ marginRight: 4 }} />
                                        )}
                                        <AppText
                                            variant="label"
                                            color={isSelected ? '#FFF' : Colors.text.primary}
                                            style={{ fontSize: 11 }}
                                        >
                                            {lang}
                                        </AppText>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Terms & Conditions */}
                    <TouchableOpacity
                        style={styles.termsRow}
                        onPress={() => setAcceptedTerms(!acceptedTerms)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.checkbox, acceptedTerms && styles.checkboxActive]}>
                            {acceptedTerms && <Ionicons name="checkmark" size={14} color="#FFF" />}
                        </View>
                        <AppText variant="body" style={styles.termsText}>
                            I accept the{' '}
                        </AppText>
                        <TouchableOpacity onPress={() => router.push('/auth/terms')}>
                            <AppText variant="body" color={Colors.secondary.teal} style={styles.termsLink}>
                                Terms & Conditions
                            </AppText>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <AppButton
                        title="Submit Credentials"
                        type="gradient"
                        onPress={() => router.replace('/(teacher)')}
                        style={styles.submitBtn}
                        disabled={!acceptedTerms}
                    />
                </AppCard>

                {/* Social Sign Up */}
                <View style={styles.dividerRow}>
                    <View style={styles.dividerLine} />
                    <AppText variant="label" style={styles.dividerText}>OR SIGN UP WITH</AppText>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialRow}>
                    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                        <View style={styles.socialIcon}>
                            <AppText style={{ fontSize: 20 }}>G</AppText>
                        </View>
                        <AppText variant="body" style={styles.socialLabel}>Google</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                        <View style={[styles.socialIcon, { backgroundColor: '#E8F5E9' }]}>
                            <Ionicons name="call" size={20} color="#4CAF50" />
                        </View>
                        <AppText variant="body" style={styles.socialLabel}>Phone</AppText>
                    </TouchableOpacity>
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
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backBtn: {
        marginLeft: 20,
        marginTop: 10,
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 40,
    },
    formCard: {
        padding: 25,
        borderRadius: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 10,
        marginBottom: 8,
        color: Colors.text.muted,
        fontWeight: '700',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border.default,
        borderRadius: 14,
        paddingHorizontal: 15,
        height: 52,
        backgroundColor: '#F8FAFC',
        fontSize: 15,
        color: Colors.text.primary,
    },
    textArea: {
        height: 100,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    phoneRow: {
        flexDirection: 'row',
        gap: 10,
    },
    countryCode: {
        height: 52,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: Colors.border.default,
        borderRadius: 14,
    },
    langHint: {
        color: Colors.text.muted,
        marginBottom: 12,
        fontSize: 11,
    },
    langGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    langChip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: Colors.background.section,
        borderWidth: 1,
        borderColor: Colors.border.default,
    },
    langChipActive: {
        backgroundColor: Colors.secondary.teal,
        borderColor: Colors.secondary.teal,
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: Colors.border.default,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxActive: {
        backgroundColor: Colors.secondary.teal,
        borderColor: Colors.secondary.teal,
    },
    termsText: {
        fontSize: 13,
        color: Colors.text.secondary,
    },
    termsLink: {
        fontSize: 13,
        fontWeight: '700',
    },
    submitBtn: {
        marginTop: 5,
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.border.default,
    },
    dividerText: {
        marginHorizontal: 15,
        fontSize: 10,
        color: Colors.text.muted,
    },
    socialRow: {
        flexDirection: 'row',
        gap: 15,
    },
    socialBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background.card,
        paddingVertical: 14,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border.default,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
    },
    socialIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#FEF3E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text.primary,
    },
});
