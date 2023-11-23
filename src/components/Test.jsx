const MyComponent = ({ data, query }) => {
  const keysToSearch = ["firstName", "email", "phone"];

  const search = (data) => {
    return data.filter((item) =>
      keysToSearch.some(
        (key) =>
          item.id.toString().includes(query.toLowerCase()) ||
          item[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const filteredData = search(data);

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };
  const tableCellStyle = {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <tbody>
        <tr>
          <th style={tableHeaderStyle}>T/R</th>
          <th style={tableHeaderStyle}>FirstName</th>
          <th style={tableHeaderStyle}>Email</th>
          <th style={tableHeaderStyle}>phone</th>
        </tr>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td style={tableCellStyle}>{item.id}</td>
            <td style={tableCellStyle}>{item.firstName}</td>
            <td style={tableCellStyle}>{item.email}</td>
            <td style={tableCellStyle}>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyComponent;
