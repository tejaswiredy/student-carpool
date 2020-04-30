import $ from "jquery";
import dt from "datatables";
import { format } from "date-fns";

let OfferedRidesTable = {
  render: (response) => {
    let tableCols = Object.keys(response[0]);
    return `
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    ${tableCols.map((header) => `<th>${header}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${response
                  .map(
                    (row) => `
                            <tr>
                                <td>${row.id}</td>
                                <td>${format(
                                  new Date(row.createdAt),
                                  "MM/dd/yyyy hh:mm:ss"
                                )}</td>
                                <td>${row.name}</td>
                                <td><img src="${row.avatar}"/></td>
                                <td>${row.title}</td>
                                <td>${row.content}</td>
                            </tr>
                        `
                  )
                  .join("")}
            </tbody>
        </table>
      `;
  },
  after_render: async () => {
    $(".table").DataTable();
  },
};

export default OfferedRidesTable;
