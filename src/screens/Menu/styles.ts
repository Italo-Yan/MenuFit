import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C2340',
    paddingHorizontal: 20,
    paddingTop: 40,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  counterSection: {
    backgroundColor: '#083358',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterBox: {
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10,
  },
  counterValue: {
    fontSize: 24,
    color: 'white',
  },
  dayNumber: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  mealList: {
    marginTop: 20,
  },
  mealItem: {
    backgroundColor: '#083358',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mealTime: {
    color: 'white',
    fontSize: 16,
  },
  mealName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
})