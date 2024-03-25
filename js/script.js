// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePayAndTaxesOfSalary () {
  const TAX_RATE = 0.18
  // input
  const workHours = parseInt(document.getElementById('work-hours').value)
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)

  // process
  const payOfSalary = workHours * hourlyRate * (1.00 - TAX_RATE)
  const taxesOfSalary = workHours * hourlyRate * TAX_RATE

  // output
  document.getElementById('pay').innerHTML = 'Pay is: $' + payOfSalary.toFixed(2)
  document.getElementById('taxes').innerHTML = 'Taxes is: $' + taxesOfSalary.toFixed(2)

}
