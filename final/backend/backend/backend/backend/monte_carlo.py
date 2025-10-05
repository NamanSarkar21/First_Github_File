import numpy as np

def monte_carlo_simulation(portfolio, simulations=1000):
    results = {}
    for ticker, value in portfolio.items():
        simulated_returns = np.random.normal(0.001, 0.02, simulations)  # mean, std
        simulated_portfolio = value * (1 + simulated_returns)
        results[ticker] = {
            "mean": np.mean(simulated_portfolio),
            "std": np.std(simulated_portfolio),
            "5%_quantile": np.percentile(simulated_portfolio,5),
            "95%_quantile": np.percentile(simulated_portfolio,95)
        }
    return results
