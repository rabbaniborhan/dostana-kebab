import * as XLSX from "xlsx";

/**
 * Utility function to download data as a single CSV file
 */
export function exportToCSV(data: Record<string, any>[], filename: string) {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const csvContent = XLSX.utils.sheet_to_csv(worksheet);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const cleanFileName = filename.endsWith(".csv") ? filename : `${filename}.csv`;

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", cleanFileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Utility function to download data as XLSX file
 */
export function exportToXLSX(data: Record<string, any>[], filename: string, sheetName: string = "Data") {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  const cleanFileName = filename.endsWith(".xlsx") ? filename : `${filename}.xlsx`;
  XLSX.writeFile(workbook, cleanFileName);
}

/**
 * Utility function to download multiple tables into a single XLSX file with multiple sheets
 */
export function exportMultipleSheetsToXLSX(
  sheets: { sheetName: string; data: Record<string, any>[] }[],
  filename: string
) {
  const workbook = XLSX.utils.book_new();
  let addedSheets = 0;

  sheets.forEach((s) => {
    if (s.data && s.data.length > 0) {
      const worksheet = XLSX.utils.json_to_sheet(s.data);
      XLSX.utils.book_append_sheet(workbook, worksheet, s.sheetName.substring(0, 31));
      addedSheets++;
    }
  });

  if (addedSheets === 0) {
    alert("No data available to export.");
    return;
  }

  const cleanFileName = filename.endsWith(".xlsx") ? filename : `${filename}.xlsx`;
  XLSX.writeFile(workbook, cleanFileName);
}

/**
 * Utility function to export all table datasets on a page as individual CSV files
 */
export function exportMultipleCSVs(files: { filename: string; data: Record<string, any>[] }[]) {
  let count = 0;
  files.forEach((item, idx) => {
    if (item.data && item.data.length > 0) {
      // Delay slightly between downloads so browser doesn't block popup downloads
      setTimeout(() => {
        exportToCSV(item.data, item.filename);
      }, idx * 250);
      count++;
    }
  });

  if (count === 0) {
    alert("No data available to export.");
  }
}

