<template>
  <div class="container">
    <div class="plaster-calculator">
      <div class="plaster-calculator-form">
        <!-- Chips -->
        <div class="chips">
          <div class="chip">
            <p>Строительный калькулятор</p>
          </div>
          <div class="chip">
            <p>Шпатлевка</p>
          </div>
        </div>
        <!-- Header -->
        <div class="plaster-header">
          <h1>Калькулятор расхода шпатлевки</h1>
        </div>
        <!-- Form -->
        <form @submit.prevent="calculateConsumption">
          <!-- Plaster Type Selection -->
          <div class="plaster-header-row">
            <div class="plaster-header-row__element">
              <label for="plasterType">Выберите шпатлевку:</label>
              <select class="plaster-select" id="plasterType" v-model="plasterType" required>
                <option value="гипсовая базовая">Гипсовая базовая</option>
                <option value="гипсовая финишная">Гипсовая финишная</option>
                <option value="фасадная базовая">Фасадная базовая</option>
                <option value="фасадная финишная">Фасадная финишная</option>
                <option value="полимерная финишная">Полимерная финишная</option>
                <option value="готовая к применению">Готовая к применению</option>
              </select>
            </div>
            <div class="plaster-header-row__element">
              <label for="area">Площадь, м²:</label>
              <input class="plaster-input" placeholder="0 м²" type="number" id="area" v-model.number="area" required>
            </div>
            <div class="plaster-header-row__element">
              <label for="thickness">Толщина слоя, мм:</label>
              <input class="plaster-input" placeholder="0 мм" type="number" id="thickness" v-model.number="thickness" required>
            </div>
          </div>

          <!-- Calculation and Reset Buttons -->
          <div class="plaster-header-row">
            <div class="plaster-header-row__element">
              <label for="result">Результат рассчета:</label>
              <input class="plaster-input calculation-result" readonly v-model="formattedResult">
            </div>
            <button class="calculate-btn" type="submit">Рассчитать</button>
            <button class="reset-btn" type="button" @click="reset">Сброс</button>
          </div>
        </form>
      </div>
      <div class="plaster-image">
        <img src="../assets/sub.png" alt="Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlasterCalculator',
  data() {
    return {
      area: null,
      thickness: null,
      plasterType: 'гипсовая базовая',
      result: null,
      plasterDensities: {
        'гипсовая базовая': 1063.12,
        'гипсовая финишная': 925,
        'фасадная базовая': 1091.88,
        'фасадная финишная': 1014.06,
        'полимерная финишная': 1125.94,
        'готовая к применению': 1600.94,
      }
    };
  },
  methods: {
    calculateConsumption() {
      const density = this.plasterDensities[this.plasterType];
      this.result = this.area * this.thickness * density / 1000;
    },
    reset() {
      this.area = null;
      this.thickness = null;
      this.plasterType = 'гипсовая базовая';
      this.result = null;
    }
  },
  computed: {
    formattedResult() {
      return this.result !== null ? `${this.result.toFixed(2)} кг` : "0 кг";
    }
},
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.plaster-calculator {
  border-radius: 30px;
  padding: 30px 20px;
  background-color: #F0F5FB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.plaster-calculator-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chips {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.chip {
  display: flex;
  border-radius: 50px;
  background-color: #ffffff;
  height: 30px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
}
.chip p {
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 500;
}
.plaster-header h1 {
  font-size: 48px;
  max-width: 600px;
}
.plaster-image img {
  max-width: 300px;
  margin-right: 100px;
}
.plaster-header-row {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.plaster-input {
  width: 130px;
  border-radius: 10px;
  height: 40px;
}
.plaster-select {
  border-radius: 10px;
  height: 40px;
  border: 2px solid #000;
}
.plaster-header-row__element {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.plaster-header-row__element label {
  margin-bottom: 10px;
}

.plaster-header-row:nth-child(2) {
  margin-top: 10px;
}

.calculate-btn, .reset-btn {
  padding: 0 30px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  color: #fff;
  border: none;
}
.calculate-btn {
  background-color: #E4102D;
}
.reset-btn {
  background-color: #A7A7A7;
}
.calculation-result {
  font-weight: 700;
  text-align: center;
}


@media (max-width: 768px) {
  .plaster-calculator {
    flex-direction: column;
    align-items: flex-start;
  }
  .plaster-image img {
    max-width: 100%;
    margin: 20px 0;
  }
  .plaster-header-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .plaster-header-row__element {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .calculate-btn, .reset-btn {
    padding: 10px 20px; /* Adjust padding for smaller screens */
    width: 100%; /* Full width for easier access */
    margin: 10px 0; /* Add margin between buttons */
  }
  .calculation-result {
    width: 100%; /* Make the result input full width */
  }

  .plaster-header-row,
  .plaster-header-row__element,
  .plaster-input,
  .plaster-select,
  .calculation-result,
  .calculate-btn,
  .reset-btn {
    width: 100%; /* Ensure full width for all elements */
    box-sizing: border-box; /* Include padding and borders in the element's total width */
  }
}

@media (max-width: 480px) {
  .plaster-header h1 {
    font-size: 36px; /* Smaller font size for very small screens */
  }
  .chips {
    flex-direction: column; /* Stack chips vertically on very small screens */
    align-items: center;
  }
  .chip {
    margin-bottom: 10px; /* Add space between stacked chips */
  }
}
</style>
