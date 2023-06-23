// Function to calculate age
function calculateAge() {
  // INPUT AREA
  const dayInput = document.getElementById("day-input");
  const monthInput = document.getElementById("month-input");
  const yearInput = document.getElementById("year-input");
  const errorInfoTags = document.querySelectorAll("section header div span");

  // DISPLAY AREA

  const errorInfoDay = document.querySelector(".error-info-day");
  const errorInfoMonth = document.querySelector(".error-info-month");
  const errorInfoYear = document.querySelector(".error-info-year");

  const yearsElement = document.querySelector(
    ".date-display div:nth-child(1) p"
  );
  const monthsElement = document.querySelector(
    ".date-display div:nth-child(2) p"
  );
  const daysElement = document.querySelector(
    ".date-display div:nth-child(3) p"
  );

  yearsElement.textContent = "--";
  monthsElement.textContent = "--";
  daysElement.textContent = "--";

  const inputBoxNames = document.querySelectorAll("section header div p");

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Check if any field is empty
  if (!day || !month || !year) {
    // GENERAL

    // DAY
    const pTagDay = document.querySelector("section header .day p");
    const colorDay = !day ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)";
    pTagDay.style.color = colorDay;
    errorInfoDay.style.opacity = !day ? 1 : 0;
    errorInfoDay.textContent = !day ? "This field is required" : "";
    dayInput.style.borderColor = !day ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)";

    // MONTH
    const pTagMonth = document.querySelector("section header .month p");
    const colorMonth = !month ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)";
    pTagMonth.style.color = colorMonth;
    errorInfoMonth.style.opacity = !month ? 1 : 0;
    errorInfoMonth.textContent = !month ? "This field is required" : "";
    monthInput.style.borderColor = !month
      ? "hsl(0, 100%, 67%)"
      : "hsl(0, 0%, 86%)";

    // YEAR
    const pTagYear = document.querySelector("section header .year p");
    const colorYear = !year ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)";
    pTagYear.style.color = colorYear;
    errorInfoYear.style.opacity = !year ? 1 : 0;
    errorInfoYear.textContent = !year ? "This field is required" : "";
    yearInput.style.borderColor = !year
      ? "hsl(0, 100%, 67%)"
      : "hsl(0, 0%, 86%)";

    return;
  } else {
    // Clear the error messages and reset the input field borders
    errorInfoTags.forEach((element) => {
      element.textContent = "";
    });
    inputBoxNames.forEach((element) => {
      element.style.color = "hsl(0, 1%, 44%)";
    });

    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";

    // Get current date
    const currentDate = new Date();
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    // Check if the entered date exists on the calendar
    const enteredDate = new Date(year, month - 1, day);
    const isDateValid =
      enteredDate.getFullYear() === year &&
      enteredDate.getMonth() === month - 1 &&
      enteredDate.getDate() === day;

    // Check for multiple errors
    let hasErrors = false;
    if (
      year > currentDate.getFullYear() ||
      (year === currentDate.getFullYear() &&
        month - 1 > currentDate.getMonth()) ||
      (year === currentDate.getFullYear() &&
        month - 1 === currentDate.getMonth() &&
        day > currentDate.getDate()) ||
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > lastDayOfMonth
    ) {
      // Clear the error messages and reset the input field borders
      errorInfoTags.forEach((element) => {
        element.textContent = "";
      });

      // Display the error messages for each field
      if (
        year > currentDate.getFullYear() ||
        (year === currentDate.getFullYear() &&
          month - 1 > currentDate.getMonth()) ||
        (year === currentDate.getFullYear() &&
          month - 1 === currentDate.getMonth() &&
          day > currentDate.getDate())
      ) {
        const pTagYear = document.querySelector("section header .year p");
        pTagYear.style.color = "hsl(0, 100%, 67%)";
        errorInfoYear.style.opacity = 1;
        errorInfoYear.textContent = "Must be in the past";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        hasErrors = true;
      }

      if (month < 1 || month > 12) {
        const pTagMonth = document.querySelector("section header .month p");
        pTagMonth.style.color = "hsl(0, 100%, 67%)";
        errorInfoMonth.style.opacity = 1;
        errorInfoMonth.textContent = "Must be a valid month";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        hasErrors = true;
      } else if (!isDateValid) {
        // Display error message for invalid date

        // day
        const pTagDay = document.querySelector("section header .day p");
        pTagDay.style.color = "hsl(0, 100%, 67%)";
        errorInfoDay.style.opacity = 1;
        errorInfoDay.textContent = "Must be a valid date";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        // month
        const pTagMonth = document.querySelector("section header .month p");
        pTagMonth.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        // year
        const pTagYear = document.querySelector("section header .year p");
        pTagYear.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";

        return;
      }

      if (day < 1 || day > lastDayOfMonth) {
        const pTagDay = document.querySelector("section header .day p");
        pTagDay.style.color = "hsl(0, 100%, 67%)";
        errorInfoDay.style.opacity = 1;
        errorInfoDay.textContent = "Must be a valid day";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        hasErrors = true;
      }

      return;
    }

    // Check if the entered date exists on the calendar

    // Calculate the age in years, months, and days
    const age = {
      years: currentDate.getFullYear() - year,
      months: currentDate.getMonth() - month + 1,
      days: currentDate.getDate() - day,
    };

    // Adjust the age values if months or days are negative
    if (age.months < 0) {
      age.years--;
      age.months += 12;
    }

    if (age.days < 0) {
      const tempDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        day
      );
      age.months--;
      age.days += Math.floor(
        (currentDate.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    }

    // Update the display with the calculated age

    yearsElement.textContent = age.years.toString();
    monthsElement.textContent = age.months.toString();
    daysElement.textContent = age.days.toString();
  }
}
// Add event listener to the form submit button
const submitButton = document.querySelector(".arrow");
submitButton.addEventListener("click", calculateAge);
