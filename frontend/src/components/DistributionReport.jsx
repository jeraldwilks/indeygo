import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
});

const DistributionReport = ({ sales, fundraiser }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {/* <Image src="Logo.jpg" /> */}
          <Text>*Insert Fundraiser Name Here* - Distribution Report</Text>
        </View>
        {sales.map((sale) => (
          <View key={sale._id} style={styles.section}>
            <Text style={{ marginBottom: 5 }}>{sale.name}</Text>
            {sale.products.map((each) => (
              <Text style={{ marginLeft: 10 }}>
                {each.quantity} - {each.product.productType.name} -{" "}
                {each.product.name}
              </Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default DistributionReport;
