class Auto {
    constructor(mark, model, year, vin) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }

    checkVin() {
        return this.vin.length === 16;
    }

    log() {
        return `${this.mark} ${this.model} ${this.year}`;
    }
}


class AutoFuel extends Auto {
    constructor(mark, model, year, vin, engineVolume, gasPerMile) {
    super(mark, model, year, vin);
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.engineVolume = engineVolume;
    this.gasPerMile = gasPerMile;
    }

    showFuelConsumption() {
        return `${this.engineVolume} ${this.gasPerMile}` 
    }
}


class AutoElectric extends Auto{
    constructor(mark, model, year, vin, batteryVolume) {
    super(mark, model, year, vin);   
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.batteryVolume = batteryVolume;
    }
    
    showBatteryConfig() {
        return `${this.batteryVolume}`;
    }
}

let hyundai = new AutoFuel("Hyundai", "Coupe", 2008, "22222222222222", "2.2", 11);

let tesla1 = new AutoElectric("Tesla", "Model X", 2020, "1111111111111111", "100 кВт/ч");

hyundai.log();
hyundai.checkVin();
hyundai.showFuelConsumption();

tesla1.log();
tesla1.checkVin();
tesla1.showBatteryConfig();