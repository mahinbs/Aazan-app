import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const TRANSACTIONS = [
    { id: '1', title: 'Calculus Session #421', date: 'Today, 2:45 PM', amount: '$45.00', status: 'Completed' },
    { id: '2', title: 'Physics Masterclass', date: 'Yesterday', amount: '$120.00', status: 'Completed' },
    { id: '3', title: 'Withdrawal to Bank', date: 'Feb 20, 2026', amount: '-$500.00', status: 'Pending' },
];

export default function TeacherWallet() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <AppText variant="h2" color="#FFFFFF">Wallet</AppText>
                        <TouchableOpacity style={styles.settingsBtn}>
                            <Ionicons name="options-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.balanceWrapper}>
                        <AppCard variant="glass" style={styles.balanceCard}>
                            <AppText variant="label" color="rgba(255,255,255,0.7)">Total Balance</AppText>
                            <AppText variant="display" color="#FFFFFF" style={styles.balanceText}>$2,450.80</AppText>
                            <View style={styles.statsRow}>
                                <View>
                                    <AppText variant="label" color="rgba(255,255,255,0.5)" style={{ fontSize: 9 }}>THIS MONTH</AppText>
                                    <AppText variant="h3" color="#FFFFFF" style={{ fontSize: 16 }}>$840.00</AppText>
                                </View>
                                <View style={styles.statDivider} />
                                <View>
                                    <AppText variant="label" color="rgba(255,255,255,0.5)" style={{ fontSize: 9 }}>PENDING</AppText>
                                    <AppText variant="h3" color={Colors.accent.gold} style={{ fontSize: 16 }}>$125.00</AppText>
                                </View>
                            </View>
                        </AppCard>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.actionGrid}>
                    <AppButton title="Withdraw Funds" type="gradient" onPress={() => { }} style={styles.actionBtn} />
                    <AppButton title="Bank Accounts" type="outline" onPress={() => { }} style={styles.actionBtn} />
                </View>

                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Transaction History</AppText>
                    <TouchableOpacity><AppText variant="caption" color={Colors.secondary.teal}>Filter</AppText></TouchableOpacity>
                </View>

                {TRANSACTIONS.map((tx) => (
                    <AppCard key={tx.id} variant="default" style={styles.txCard}>
                        <View style={styles.txRow}>
                            <View style={[styles.txIcon, { backgroundColor: tx.amount.startsWith('-') ? '#FEE2E2' : '#ECFDF5' }]}>
                                <Ionicons
                                    name={tx.amount.startsWith('-') ? 'arrow-up-circle' : 'arrow-down-circle'}
                                    size={24}
                                    color={tx.amount.startsWith('-') ? Colors.status.error : Colors.status.success}
                                />
                            </View>
                            <View style={styles.txInfo}>
                                <AppText variant="h3" style={{ fontSize: 15 }}>{tx.title}</AppText>
                                <AppText variant="caption">{tx.date}</AppText>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <AppText variant="h3" color={tx.amount.startsWith('-') ? Colors.status.error : Colors.status.success}>
                                    {tx.amount}
                                </AppText>
                                <AppText variant="label" style={{ fontSize: 8 }}>{tx.status}</AppText>
                            </View>
                        </View>
                    </AppCard>
                ))}

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
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceWrapper: {
        paddingHorizontal: 24,
        marginTop: 30,
    },
    balanceCard: {
        padding: 30,
        borderRadius: 24,
        marginBottom: 0,
    },
    balanceText: {
        fontSize: 40,
        marginVertical: 10,
    },
    statsRow: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        gap: 25,
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    actionGrid: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 35,
    },
    actionBtn: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    txCard: {
        marginBottom: 12,
        borderRadius: 20,
        padding: 16,
    },
    txRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txIcon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txInfo: {
        flex: 1,
        marginLeft: 15,
    },
});
