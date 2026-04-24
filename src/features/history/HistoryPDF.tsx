// features/history/HistoryPDF.tsx
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { HistoryTransformed } from "../../interfaces/historyInt";
import { dateWithHours, shortDate } from "../../utils/dateHelpers";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10 },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingVertical: 6,
  },
  cell: { flex: 1 },
  header: { backgroundColor: "#f3f4f6", fontWeight: "bold" },
});

interface Props {
  // appointments: ReturnType<
  //   typeof import("./transformHistory").transformHistory
  // >;
  appointments?: HistoryTransformed[];
  code: string | undefined;
}

export function HistoryPDF({ appointments, code }: Props) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.title}>
          Historial de Marcajes Empleado No. {code}
        </Text>

        {/* Header */}
        <View style={[styles.row, styles.header]}>
          <Text style={styles.cell}>Fecha</Text>
          <Text style={styles.cell}>Entrada</Text>
          <Text style={styles.cell}>Salida</Text>
        </View>

        {/* Filas */}
        {appointments?.map((appt, i) => {
          return (
            <View key={i} style={styles.row}>
              <Text style={styles.cell}>
                {appt.startDate ? shortDate(appt.startDate) : "-"}
              </Text>
              <Text style={styles.cell}>
                {appt.startDate ? dateWithHours(appt.startDate) : "Pendiente"}
              </Text>
              <Text style={styles.cell}>
                {appt.endDate ? dateWithHours(appt.endDate) : "Pendiente"}
              </Text>
            </View>
          );
        })}
      </Page>
    </Document>
  );
}
