document.addEventListener("DOMContentLoaded", function () {
  const WHATSAPP_NUMBER = "919629808833";
  const CALL_NUMBER = "919629808833";
  const SUPPORT_PHONE = "9629808833";
  const SUPPORT_EMAIL = "bharathiyartravelsofficial@gmail.com";
  const APPS_SCRIPT_URL = window.MYSORE_CONFIG.bookingEndpoint;

  const VEHICLES = window.MYSORE_VEHICLES;
  const HOTEL_RATES = window.MYSORE_HOTEL_RATES;
  const packageData = window.MYSORE_PACKAGES;
  for (const [duration, pkg] of Object.entries(packageData)) {
    for (const destination of Object.values(pkg.destinations)) {
      destination.vehicles = Object.entries(VEHICLES).map(([key, vehicle]) => {
        const raw = window.MYSORE_RATES?.[duration]?.[destination.rateKey]?.[key];
        return {...vehicle, price: typeof raw === 'number' && Number.isFinite(raw) && raw > 0 ? raw : null};
      });
    }
  }

  window.updateAccommodationVisibility = updateAccommodationVisibility;
window.updateHotelFields = updateHotelFields;
window.renderTariffTable = renderTariffTable;


  const destinationSidebar = document.getElementById("destinationSidebar");
  const packageTabs = document.querySelectorAll(".package-tab");
  const accommodationSelect = document.getElementById("accommodationSelect");
  const roomTypeSelect = document.getElementById("roomTypeSelect");
  const occupancySelect = document.getElementById("occupancySelect");
  const roomCountSelect = document.getElementById("roomCountSelect");
  const tariffTableBody = document.getElementById("tariffTableBody");
  const packageHeading = document.getElementById("packageHeading");
  const packageSubheading = document.getElementById("packageSubheading");
  const routeLine = document.getElementById("routeLine");
  const itineraryTitle = document.getElementById("itineraryTitle");
  const itineraryContent = document.getElementById("itineraryContent");
  const tariffSection = document.getElementById("tariffSection");

  const bookingSummary = document.getElementById("bookingSummary");
  const bookingPopupForm = document.getElementById("bookingPopupForm");
  const bookingModalEl = document.getElementById("bookingModal");
  const bookingModal = bookingModalEl ? new bootstrap.Modal(bookingModalEl) : null;

  const paymentModalEl = document.getElementById("paymentModal");
  const paymentModal = paymentModalEl ? new bootstrap.Modal(paymentModalEl) : null;
  const paymentSummaryBox = document.getElementById("paymentSummaryBox");
  const paymentOptionNote = document.getElementById("paymentOptionNote");

  const enquireWhatsappBtn = document.getElementById("enquireWhatsappBtn");
  const bookNowZeroBtn = document.getElementById("bookNowZeroBtn");
  const payOnlineBtn = document.getElementById("payOnlineBtn");
  const advancePaymentBtn = document.getElementById("advancePaymentBtn");
  const fullPaymentBtn = document.getElementById("fullPaymentBtn");
  const backToBookingBtn = document.getElementById("backToBookingBtn");

  const roomTypeField = document.getElementById("roomTypeField");
  const occupancyField = document.getElementById("occupancyField");
  const roomCountField = document.getElementById("roomCountField");
  const packageTabsRow = document.getElementById("packageTabsRow");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");
  const floatingBtns = document.getElementById("floatingBtns");

  let activePackage = "1D";
  let selectedDestinationName = "";
  let selectedBooking = null;
  let customerFormData = null;
  let savedBookingId = "";
  let withHotel = false;
  window.withHotel = false;

  function sanitizeText(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatCurrency(value) {
    if (value === null || value === undefined || value === "") return "On Request";
    return "₹ " + Number(value).toLocaleString("en-IN");
  }

  function setMinDateTime() {
    const dateInput = document.getElementById("customerDateTime");
    if (!dateInput) return;

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    dateInput.min = now.toISOString().slice(0, 16);
  }

  function formatDateTimeAMPM(inputValue) {
    const d = new Date(inputValue);
    if (isNaN(d)) return inputValue;

    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  }

  function showThankYouPopup() {
    alert("Thanks for contacting Bharathiyar Tours and Travels. Our concern team will contact you.");
  }

  function getCurrentPackageConfig() {
    return packageData[activePackage] || null;
  }

  function getCurrentDestinationConfig() {
    const pkg = getCurrentPackageConfig();
    if (!pkg || !pkg.destinations) return null;
    return pkg.destinations[selectedDestinationName] || null;
  }

  function isHotelSelected() {
    return window.withHotel === true;
  }

  function getPackageNights() {
    const match = String(activePackage || "").match(/^(\d+)D$/i);
    if (!match) return 0;
    const days = Number(match[1]);
    return days > 1 ? days - 1 : 0;
  }

  function getHotelCharge() {
    if (!isHotelSelected()) return 0;

    const roomType = roomTypeSelect?.value || "2star";
    const occupancy = occupancySelect?.value || "double";
    const roomCount = Number(roomCountSelect?.value || 1);
    const nights = getPackageNights();
    const roomRate = HOTEL_RATES?.[roomType]?.[occupancy];
    if (typeof roomRate !== "number" || !Number.isFinite(roomRate) || roomRate <= 0) return null;

    return roomRate * roomCount * nights;
  }

  function getRouteLineText(destinationName) {
    if (!destinationName) return "Mysore - Destination - Mysore";
    return `Mysore - ${destinationName} - Mysore`;
  }

  function findByHash(hash) {
    const cleanHash = String(hash || "").replace(/^#/, "").trim().toLowerCase();
    if (!cleanHash) return null;

    for (const [pkgKey, pkgValue] of Object.entries(packageData)) {
      const destinations = pkgValue?.destinations || {};
      for (const [destinationName, destinationData] of Object.entries(destinations)) {
        if ((destinationData?.hash || "").toLowerCase() === cleanHash) {
          return { pkgKey, destinationName, destinationData };
        }
      }
    }
    return null;
  }

  function updateAccommodationVisibility() {
    const accommodationFields = document.getElementById("accommodationFields");
    if (!accommodationFields) return;

    // Hide only for 1 Day
    if (activePackage === "1D") {
      accommodationFields.style.display = "none";

      withHotel = false;
const btnNoHotel = document.getElementById("btnNoHotel");
const btnYesHotel = document.getElementById("btnYesHotel");
if (btnNoHotel) btnNoHotel.classList.add("active");
if (btnYesHotel) btnYesHotel.classList.remove("active");
      if (roomTypeSelect) roomTypeSelect.value = "2star";
      if (occupancySelect) occupancySelect.value = "double";
      if (roomCountSelect) roomCountSelect.value = "1";

      [roomTypeField, occupancyField, roomCountField].forEach(field => {
        if (!field) return;
        field.classList.remove("show-hotel-field");
      });

      return;
    }

    // Show again for 2D and above
    accommodationFields.style.display = "";

    const showHotel = isHotelSelected();

    [roomTypeField, occupancyField, roomCountField].forEach(field => {
      if (!field) return;

      if (showHotel) {
        field.classList.add("show-hotel-field");
      } else {
        field.classList.remove("show-hotel-field");
      }
    });
  }

  function updateHotelFields() {
    if (!isHotelSelected()) {
      if (roomTypeSelect) roomTypeSelect.value = "2star";
      if (occupancySelect) occupancySelect.value = "double";
      if (roomCountSelect) roomCountSelect.value = "1";
    }
  }

  function updateActiveTabUI() {
    packageTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.package === activePackage);
    });
  }

  function updatePageHeading() {
    const pkg = getCurrentPackageConfig();
    const destination = getCurrentDestinationConfig();

    if (packageHeading) {
      packageHeading.textContent = pkg?.title || "Tour Packages";
    }

    if (packageSubheading) {
      packageSubheading.textContent = pkg?.subtitle || "Select your destination";
    }

    if (routeLine) {
      routeLine.textContent = getRouteLineText(selectedDestinationName);
    }

    if (itineraryTitle) {
      itineraryTitle.textContent = destination ? `${selectedDestinationName} Itinerary` : "Itinerary";
    }
  }

  function updateHash(hash) {
    if (!hash) return;
    const current = window.location.hash.replace(/^#/, "");
    if (current === hash) return;
    history.replaceState(null, "", `#${hash}`);
  }

  function populateDestinations(preferredDestinationName = "") {
    const pkg = getCurrentPackageConfig();
    if (!pkg || !destinationSidebar) return;

    updateActiveTabUI();

    const destinationNames = Object.keys(pkg.destinations || {});
    if (!destinationNames.length) {
      destinationSidebar.innerHTML = `<div class="text-muted">No destinations available.</div>`;
      return;
    }

    if (preferredDestinationName && pkg.destinations[preferredDestinationName]) {
      selectedDestinationName = preferredDestinationName;
    } else if (!pkg.destinations[selectedDestinationName]) {
      selectedDestinationName = destinationNames[0];
    }

    destinationSidebar.innerHTML = destinationNames.map(name => {
      const activeClass = name === selectedDestinationName ? "active" : "";
      return `
        <button type="button" class="tour-destination-btn ${activeClass}" data-destination="${sanitizeText(name)}">
          ${sanitizeText(name)}
        </button>
      `;
    }).join("");

    destinationSidebar.querySelectorAll(".tour-destination-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        selectedDestinationName = this.dataset.destination;
        populateDestinations(selectedDestinationName);
        renderTariffTable();
        renderItinerary();
        updatePageHeading();

        setTimeout(() => {
          const section = document.getElementById("tariffSection");
          if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 50);
      });
    });

    updatePageHeading();

    const destination = getCurrentDestinationConfig();
    if (destination?.hash) {
      updateHash(destination.hash);
    }
  }

  function renderTariffTable() {
    const pkg = getCurrentPackageConfig();
    const destination = getCurrentDestinationConfig();

    if (!pkg || !destination || !tariffTableBody) {
      tariffTableBody.innerHTML = `
        <tr>
          <td colspan="3" class="text-center py-4">No tariffs available.</td>
        </tr>
      `;
      return;
    }

    const hotelSelected = isHotelSelected();
    const hotelCharge = getHotelCharge();

    tariffTableBody.innerHTML = destination.vehicles.map(vehicle => {
      const baseFare = vehicle.price;
      const totalFare = baseFare === null || hotelCharge === null ? null : Number(baseFare) + hotelCharge;

      const bookingData = {
        packageTitle: pkg.title || "",
        packageCode: activePackage,
        destination: selectedDestinationName,
        destinationHash: destination.hash || "",
        vehicle: `${vehicle.name} - ${vehicle.type}`,
        vehicleName: vehicle.name,
        vehicleType: vehicle.type,
        tariff: totalFare,
        withHotel: hotelSelected,
        roomType: hotelSelected ? (roomTypeSelect?.selectedOptions?.[0]?.text || roomTypeSelect?.value || "") : "",
        occupancy: hotelSelected ? (occupancySelect?.selectedOptions?.[0]?.text || occupancySelect?.value || "") : "",
        roomCount: hotelSelected ? Number(roomCountSelect?.value || 1) : 0,
        hotelCharge: hotelCharge
      };

      const encodedPayload = encodeURIComponent(JSON.stringify(bookingData));

      return `
        <tr>
          <td>
            <div class="vehicle-name">${sanitizeText(vehicle.name)}</div>
            <div class="vehicle-type">${sanitizeText(vehicle.type)}</div>
          </td>
          <td>
            ${
              totalFare === null
                ? `<div class="dynamic-tariff base-rate">On Request</div>`
                : `<div class="dynamic-tariff base-rate">${formatCurrency(totalFare)}</div>`
            }
          </td>
          <td>
            ${
              totalFare === null
                ? `<button type="button" class="btn-book-table" data-booking="${encodedPayload}">Enquire</button>`
                : `<button type="button" class="btn-book-table" data-booking="${encodedPayload}">BOOK NOW</button>`
            }
          </td>
        </tr>
      `;
    }).join("");

    tariffTableBody.querySelectorAll(".btn-book-table").forEach(btn => {
      btn.addEventListener("click", function () {
        try {
          const payload = JSON.parse(decodeURIComponent(this.dataset.booking || ""));
          openBookingModal(payload);
        } catch (err) {
          alert("Unable to open booking modal.");
        }
      });
    });
  }

  function renderItinerary() {
    const destination = getCurrentDestinationConfig();

    if (!destination || !itineraryContent) {
      itineraryContent.innerHTML = `
        <tr>
          <td colspan="2">No itinerary available.</td>
        </tr>
      `;
      return;
    }

    const itinerary = destination.itinerary || [];
    if (!itinerary.length) {
      itineraryContent.innerHTML = `
        <tr>
          <td colspan="2">No itinerary available.</td>
        </tr>
      `;
      return;
    }

    itineraryContent.innerHTML = itinerary.map(item => `
      <tr>
        <td>${sanitizeText(item.day || "")}</td>
        <td>${sanitizeText(item.text || "")}</td>
      </tr>
    `).join("");
  }

  function openBookingModal(bookingData) {
    selectedBooking = bookingData;
    customerFormData = null;
    savedBookingId = "";

    if (!bookingSummary || !bookingPopupForm) return;

    bookingSummary.innerHTML = `
      <div><span>Package</span><span>${sanitizeText(selectedBooking.packageTitle)}</span></div>
      <div><span>Destination</span><span>${sanitizeText(selectedBooking.destination)}</span></div>
      <div><span>Vehicle</span><span>${sanitizeText(selectedBooking.vehicle)}</span></div>
      <div><span>Total Tariff</span><span>${formatCurrency(selectedBooking.tariff)}</span></div>
      ${
        selectedBooking.withHotel
          ? `<div><span>Accommodation</span><span>${sanitizeText(selectedBooking.roomType)}, ${sanitizeText(selectedBooking.occupancy)}, ${selectedBooking.roomCount} Room${selectedBooking.roomCount > 1 ? "s" : ""}</span></div>`
          : `<div><span>Accommodation</span><span>Without Hotel</span></div>`
      }
    `;

    bookingPopupForm.reset();
    setMinDateTime();

    const unpriced = selectedBooking.tariff === null;
    if (payOnlineBtn) { payOnlineBtn.disabled = unpriced; payOnlineBtn.title = unpriced ? "Please enquire for a confirmed fare first" : ""; }
    if (bookNowZeroBtn) { bookNowZeroBtn.disabled = unpriced; bookNowZeroBtn.title = unpriced ? "Please enquire for a confirmed fare first" : ""; }
    if (bookingModal) bookingModal.show();
  }

  function validateCustomerForm() {
    const name = document.getElementById("customerName")?.value.trim();
    const phone = document.getElementById("customerPhone")?.value.trim();
    const dateTime = document.getElementById("customerDateTime")?.value;
    const pickup = document.getElementById("customerPickup")?.value.trim();

    if (!selectedBooking) {
      alert("Please select a package first.");
      return null;
    }

    if (!name || !phone || !dateTime || !pickup) {
      alert("Please fill all fields.");
      return null;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return null;
    }

    const selectedDate = new Date(dateTime);
    if (selectedDate < new Date()) {
      alert("Old date and time cannot be selected.");
      return null;
    }

    return { name, phone, dateTime, pickup };
  }

  async function postToAppsScript(action, payload) {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({ action, payload })
    });

    const text = await response.text();
    let data = {};

    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Invalid server response");
    }

    if (data.status !== "success") {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  async function saveBookingToSheet(paymentTypeValue = "") {
    if (selectedBooking?.tariff === null) throw new Error("Please enquire for a confirmed fare first.");
    if (!selectedBooking || !customerFormData) {
      throw new Error("Booking data missing");
    }

    const payload = {
      branch: "Mysore",
      origin: "Mysore",
      returnLocation: "Mysore",
      companyEmail: SUPPORT_EMAIL,
      packageTitle: selectedBooking.packageTitle,
      destination: selectedBooking.destination,
      vehicle: selectedBooking.vehicle,
      tariff: selectedBooking.tariff,
      withHotel: selectedBooking.withHotel,
      roomType: selectedBooking.roomType,
      occupancy: selectedBooking.occupancy,
      roomCount: selectedBooking.roomCount,
      hotelCharge: selectedBooking.hotelCharge || 0,
      packageCode: selectedBooking.packageCode || "",
      customerName: customerFormData.name,
      customerPhone: customerFormData.phone,
      travelDate: formatDateTimeAMPM(customerFormData.dateTime),
      pickup: customerFormData.pickup,
      paymentType: paymentTypeValue,
      sourcePage: window.location.href
    };

    const result = await postToAppsScript("saveBooking", payload);
    savedBookingId = result.bookingId || "";
    return result;
  }

  function getAdvanceConfig() {
    const withHotel = !!selectedBooking?.withHotel;

    if (withHotel) {
      return {
        type: "ADVANCE_50",
        label: "Pay Advance 50%",
        amount: Math.round(Number(selectedBooking.tariff || 0) * 0.50)
      };
    }

    return {
      type: "ADVANCE_10",
      label: "Pay Advance 10%",
      amount: Math.round(Number(selectedBooking.tariff || 0) * 0.10)
    };
  }

  function fillPaymentSummary() {
    if (!paymentSummaryBox || !selectedBooking) return;

    const advance = getAdvanceConfig();
    const total = Number(selectedBooking.tariff || 0);

    paymentSummaryBox.innerHTML = `
      <div><span>Booking ID</span><span>${sanitizeText(savedBookingId || "-")}</span></div>
      <div><span>Package</span><span>${sanitizeText(selectedBooking.packageTitle)}</span></div>
      <div><span>Destination</span><span>${sanitizeText(selectedBooking.destination)}</span></div>
      <div><span>Vehicle</span><span>${sanitizeText(selectedBooking.vehicleName || selectedBooking.vehicle)}</span></div>
      <div><span>Total Tariff</span><span>${formatCurrency(total)}</span></div>
      ${
        selectedBooking.withHotel
          ? `<div><span>Hotel Charge</span><span>${formatCurrency(selectedBooking.hotelCharge)}</span></div>`
          : ``
      }
    `;

    if (paymentOptionNote) {
      paymentOptionNote.innerHTML = "";
      paymentOptionNote.style.display = "none";
    }

    if (advancePaymentBtn) {
      advancePaymentBtn.textContent = `${advance.label} - ${formatCurrency(advance.amount)}`;
    }

    if (fullPaymentBtn) {
      fullPaymentBtn.textContent = `Pay Full - ${formatCurrency(total)}`;
    }
  }

  function buildWhatsAppBookingMessage(data) {
    const url =
      window.location.href.split("#")[0] +
      (getCurrentDestinationConfig()?.hash ? `#${getCurrentDestinationConfig().hash}` : "");

    return `✨ *BHARATHIYAR TOURS & TRAVELS*
  ━━━━━━━━━━━━━━━━━
  📦 *PACKAGE DETAILS*
  ━━━━━━━━━━━━━━━━━
  📍 Route: Mysore → ${selectedBooking?.destination || ""} → Mysore
  🗺️ Package: ${selectedBooking?.packageTitle || ""}
  🚘 Vehicle: ${selectedBooking?.vehicle || ""}
  💰 Tariff: ${formatCurrency(selectedBooking?.tariff)}

  🏨 *Accommodation:*
  ${
    selectedBooking?.withHotel
      ? `✔ ${selectedBooking.roomType}
  ✔ ${selectedBooking.occupancy}
  ✔ ${selectedBooking.roomCount} Room${selectedBooking.roomCount > 1 ? "s" : ""}`
      : "❌ Without Hotel"
  }

  ━━━━━━━━━━━━━━━━━
  👤 *CUSTOMER DETAILS*
  ━━━━━━━━━━━━━━━━━
  🧑 Name: ${data?.name || ""}
  📞 Phone: ${data?.phone || ""}
  🗓️ Pickup: ${data?.dateTime ? formatDateTimeAMPM(data.dateTime) : ""}
  📍 Pickup in Mysore: ${data?.pickup || ""}
  📍 Return: Mysore

  ━━━━━━━━━━━━━━━━━
  🙏 Kindly confirm availability & pricing.
  Thank you! 😊`;
  }

  function buildReceiptPayload(paymentInfo) {
    const total = Number(selectedBooking?.tariff || 0);
    const paid = Number(paymentInfo?.paidAmount || 0);

    return {
      receiptTitle: paymentInfo.paymentType === "FULL" ? "FULL PAYMENT RECEIPT" : "ADVANCE PAYMENT RECEIPT",
      paymentStatus: paymentInfo.paymentType === "FULL" ? "FULL PAYMENT RECEIVED" : "ADVANCE RECEIVED",
      quoteNo: savedBookingId,
      date: new Date().toLocaleDateString("en-GB"),
      customerName: customerFormData?.name,
      customerPhone: customerFormData?.phone,
      pickup: customerFormData?.pickup,
      drop: "Mysore",
      route: `Mysore → ${selectedBooking?.destination} → Mysore`,
      companyPhonePrimary: SUPPORT_PHONE,
      companyEmail: SUPPORT_EMAIL,
      vehicle: selectedBooking?.vehicle,
      packageTitle: selectedBooking?.packageTitle,
      packageCode: selectedBooking?.packageCode,
      travelDate: formatDateTimeAMPM(customerFormData?.dateTime),
      totalTariff: total,
      paidAmount: paid,
      pendingAmount: total - paid,
      paymentId: paymentInfo.paymentId,
      paymentType: paymentInfo.paymentType,
      terms: [
        "Driver details will be assigned before journey.",
        "Balance to be paid during trip.",
        "Cancellation charges apply."
      ]
    };
  }

  function goToReceiptPage(paymentInfo) {
    const data = buildReceiptPayload(paymentInfo);
    sessionStorage.setItem("btt_mysore_receipt_data", JSON.stringify(data));
    window.location.href = "receipt-success.html";
  }

  async function startPayment(paymentType) {
    if (!(selectedBooking?.tariff > 0)) throw new Error("Please enquire for a confirmed fare first.");
    if (!selectedBooking || !customerFormData || !savedBookingId) {
      throw new Error("Booking is incomplete");
    }

    const createOrderResult = await postToAppsScript("createOrder", {
      bookingId: savedBookingId,
      tariff: Number(selectedBooking.tariff || 0),
      withHotel: !!selectedBooking.withHotel,
      paymentType: paymentType
    });

    if (!createOrderResult.orderId) {
      throw new Error("Failed to create order");
    }

    const options = {
      key: createOrderResult.key,
      amount: Number(createOrderResult.amount || 0) * 100,
      currency: createOrderResult.currency || "INR",
      name: "BHARATHIYAR TOURS AND TRAVELS",
      description: `${paymentType === "FULL" ? "Full Payment" : "Advance Payment"} - ${selectedBooking.packageTitle}`,
      order_id: createOrderResult.orderId,
      handler: async function (response) {
        try {
          await postToAppsScript("verifyPayment", {
            bookingId: savedBookingId,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            paymentType: paymentType,
            amount: Number(createOrderResult.amount || 0)
          });

          if (paymentModal) paymentModal.hide();
          if (bookingModal) bookingModal.hide();

          goToReceiptPage({
    paymentType: paymentType,
    paymentId: response.razorpay_payment_id,
    paidAmount: Number(createOrderResult.amount || 0)
  });
        } catch (err) {
          alert(err.message || "Payment verified, but final step failed.");
        } finally {
          resetPaymentButtons();
        }
      },
      modal: {
        ondismiss: function () {
          resetPaymentButtons();
        }
      },
      prefill: {
        name: customerFormData?.name || "",
        contact: customerFormData?.phone || ""
      },
      theme: {
        color: "#111111"
      }
    };

    const rzp = new Razorpay(options);

    rzp.on("payment.failed", function (resp) {
      resetPaymentButtons();
      alert(resp?.error?.description || "Payment failed");
    });

    rzp.open();
  }

  function resetMainButtons() {
    if (enquireWhatsappBtn) {
      enquireWhatsappBtn.disabled = false;
      enquireWhatsappBtn.innerHTML = `<i class="bi bi-whatsapp me-2"></i>Enquire on WhatsApp`;
    }

    if (bookNowZeroBtn) {
      bookNowZeroBtn.disabled = selectedBooking?.tariff === null;
      bookNowZeroBtn.textContent = "Book Now @ ₹0";
    }

    if (payOnlineBtn) {
      payOnlineBtn.disabled = selectedBooking?.tariff === null;
      payOnlineBtn.innerHTML = `<i class="bi bi-credit-card me-2"></i>Pay Online`;
    }
  }

  function resetPaymentButtons() {
    if (!advancePaymentBtn || !fullPaymentBtn) return;

    advancePaymentBtn.disabled = false;
    fullPaymentBtn.disabled = false;

    const advance = getAdvanceConfig();
    const total = Number(selectedBooking?.tariff || 0);

    advancePaymentBtn.textContent = `${advance.label} - ${formatCurrency(advance.amount)}`;
    fullPaymentBtn.textContent = `Pay Full - ${formatCurrency(total)}`;
  }

  if (bookingPopupForm) {
    bookingPopupForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  if (enquireWhatsappBtn) {
    enquireWhatsappBtn.addEventListener("click", async function () {
      try {
        customerFormData = validateCustomerForm();
        if (!customerFormData) return;

        enquireWhatsappBtn.disabled = true;
        enquireWhatsappBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Please wait...`;

        const message = buildWhatsAppBookingMessage(customerFormData);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
        showThankYouPopup();
      } catch (err) {
        alert(err.message || "Failed to continue to WhatsApp");
      } finally {
        resetMainButtons();
      }
    });
  }

  if (bookNowZeroBtn) {
    bookNowZeroBtn.addEventListener("click", async function () {
      try {
        customerFormData = validateCustomerForm();
        if (!customerFormData) return;

        bookNowZeroBtn.disabled = true;
        bookNowZeroBtn.textContent = "Please wait...";

        await saveBookingToSheet("BOOK_NOW_ZERO");
        showThankYouPopup();

        if (bookingModal) bookingModal.hide();
        if (bookingPopupForm) bookingPopupForm.reset();
      } catch (err) {
        alert(err.message || "Failed to save booking");
      } finally {
        resetMainButtons();
      }
    });
  }

  if (payOnlineBtn) {
    payOnlineBtn.addEventListener("click", async function () {
      try {
        customerFormData = validateCustomerForm();
        if (!customerFormData) return;

        payOnlineBtn.disabled = true;
        payOnlineBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Please wait...`;

        await saveBookingToSheet("PAY_ONLINE");
        fillPaymentSummary();

        if (bookingModal) bookingModal.hide();
        if (paymentModal) paymentModal.show();
      } catch (err) {
        alert(err.message || "Failed to continue to payment");
      } finally {
        resetMainButtons();
      }
    });
  }

  if (backToBookingBtn) {
    backToBookingBtn.addEventListener("click", function () {
      if (paymentModal) paymentModal.hide();
      if (bookingModal) bookingModal.show();
    });
  }

  if (advancePaymentBtn) {
    advancePaymentBtn.addEventListener("click", async function () {
      try {
        advancePaymentBtn.disabled = true;
        fullPaymentBtn.disabled = true;
        advancePaymentBtn.textContent = "Please wait...";
        await startPayment(getAdvanceConfig().type);
      } catch (err) {
        alert(err.message || "Unable to start payment");
        resetPaymentButtons();
      }
    });
  }

  if (fullPaymentBtn) {
    fullPaymentBtn.addEventListener("click", async function () {
      try {
        advancePaymentBtn.disabled = true;
        fullPaymentBtn.disabled = true;
        fullPaymentBtn.textContent = "Please wait...";
        await startPayment("FULL");
      } catch (err) {
        alert(err.message || "Unable to start payment");
        resetPaymentButtons();
      }
    });
  }

  const phoneInput = document.getElementById("customerPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
  }

  function syncFloatingButtons(show) {
    if (!floatingBtns) return;
    floatingBtns.style.display = show ? "flex" : "none";
  }

  if (bookingModalEl) {
    bookingModalEl.addEventListener("shown.bs.modal", function () {
      document.body.classList.add("modal-open-custom");
      syncFloatingButtons(false);
    });

    bookingModalEl.addEventListener("hidden.bs.modal", function () {
      document.body.classList.remove("modal-open-custom");
      if (!paymentModalEl || !paymentModalEl.classList.contains("show")) {
        syncFloatingButtons(true);
      }
    });
  }

  if (paymentModalEl) {
    paymentModalEl.addEventListener("shown.bs.modal", function () {
      syncFloatingButtons(false);
    });

    paymentModalEl.addEventListener("hidden.bs.modal", function () {
      if (!bookingModalEl || !bookingModalEl.classList.contains("show")) {
        syncFloatingButtons(true);
      }
    });
  }

  function applyHashSelection() {
    const found = findByHash(window.location.hash);
    if (!found) return false;

    activePackage = found.pkgKey;
    selectedDestinationName = found.destinationName;

    updateAccommodationVisibility();
    updateHotelFields();
    populateDestinations(selectedDestinationName);
    renderTariffTable();
    renderItinerary();
    updatePageHeading();

    setTimeout(() => {
      const section = document.getElementById("tariffSection");
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);

    return true;
  }

  packageTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const pkg = this.dataset.package;
      if (!packageData[pkg]) return;

      activePackage = pkg;
      selectedDestinationName = "";

      updateAccommodationVisibility();
      updateHotelFields();
      populateDestinations();
      renderTariffTable();
      renderItinerary();
      updatePageHeading();

      if (packageTabsRow) {
        this.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    });
  });

  if (accommodationSelect) {
    accommodationSelect.addEventListener("change", function () {
      updateAccommodationVisibility();
      updateHotelFields();
      renderTariffTable();
    });
  }

  if (roomTypeSelect) {
    roomTypeSelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (occupancySelect) {
    occupancySelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (roomCountSelect) {
    roomCountSelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (scrollLeftBtn && packageTabsRow) {
    scrollLeftBtn.addEventListener("click", function () {
      packageTabsRow.scrollBy({ left: -220, behavior: "smooth" });
    });
  }

  if (scrollRightBtn && packageTabsRow) {
    scrollRightBtn.addEventListener("click", function () {
      packageTabsRow.scrollBy({ left: 220, behavior: "smooth" });
    });
  }

  updateAccommodationVisibility();
  updateHotelFields();

  if (!applyHashSelection()) {
    populateDestinations();
    renderTariffTable();
    renderItinerary();
    updatePageHeading();
  }

  window.addEventListener("hashchange", function () {
    applyHashSelection();
  });
});
