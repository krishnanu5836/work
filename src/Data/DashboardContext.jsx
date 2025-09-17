const dashboardData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Cloud Accounts", text: "Widget content..." },
        { id: 102, name: "Cloud Account Risk Assessment", text: "Widget content..." }
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        { id: 201, name: "Top 5 Namespace Specific Alerts", text: "Widget content..." },
        { id: 202, name: "Workload Alerts", text: "Widget content..." }
      ]
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        { id: 301, name: "Image Risk Assessment", text: "Widget content..." },
        { id: 302, name: "Image Security Issues", text: "Widget content..." }
      ]
    }
  ]
};

export default dashboardData;
