import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import report from '../../assets/report.pdf';
import '../styles/ThesisModal.css';

const ThesisModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { theme } = useTheme();

  // Actual model performance data from the thesis (Page 18-19)
  const modelPerformance = [
    { model: 'Random Forest', r2: 0.88, mse: 2.0e10, mae: 28752 },
    { model: 'XGBoost', r2: 0.87, mse: 2.1e10, mae: 29402 },
    { model: 'Gradient Boosting', r2: 0.87, mse: 2.1e10, mae: 30644 },
    { model: 'LightGBM', r2: 0.87, mse: 2.2e10, mae: 31176 },
    { model: 'Decision Tree', r2: 0.83, mse: 2.8e10, mae: 33351 },
  ];

  // Actual vs Predicted values from Table 2 (Page 19)
  const actualVsPredicted = [
    { id: 1, actual: 426872, predicted: 429093 },
    { id: 2, actual: 514449, predicted: 567844 },
    { id: 3, actual: 436123, predicted: 434864 },
    { id: 4, actual: 440528, predicted: 438380 },
    { id: 5, actual: 572687, predicted: 522603 },
  ];

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = report;
    link.download = 'Dublin_Housing_Thesis_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className={`thesis-modal-overlay ${theme === 'dark' ? 'dark' : ''}`} onClick={onClose}>
      <div className="thesis-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="thesis-modal-header">
          <div>
            <h2>Dublin Housing Market Thesis</h2>
            <p className="thesis-subtitle">
              Impact of Macroeconomic Factors on Newly Built Residential Property Prices in Dublin
            </p>
          </div>
          <button className="thesis-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="thesis-modal-tabs">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'models' ? 'active' : ''}`}
            onClick={() => setActiveTab('models')}
          >
            Model Results
          </button>
          <button
            className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
        </div>

        {/* Content */}
        <div className="thesis-modal-body">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="thesis-info-grid">
                <div className="info-card">
                  <h4>📄 Document Info</h4>
                  <p><strong>Page Count:</strong> 21 pages</p>
                  <p><strong>Word Count:</strong> 8,814 words</p>
                  <p><strong>Duration:</strong> 2019 - 2023</p>
                  <p><strong>Status:</strong> Completed (Dec 2024)</p>
                </div>

                <div className="info-card">
                  <h4>🎯 Key Achievement</h4>
                  <p><strong>Best Model:</strong> Random Forest Regressor</p>
                  <p><strong>Accuracy:</strong> <span className="accuracy-badge">88%</span></p>
                  <p><strong>R² Score:</strong> 0.88</p>
                  <p><strong>MAE:</strong> €28,752</p>
                </div>

                <div className="info-card">
                  <h4>🔍 Research Focus</h4>
                  <p><strong>Question:</strong> How do macroeconomic factors influence newly built residential property prices in Dublin?</p>
                  <p><strong>Data Source:</strong> Property Services Regulatory Authority (PRSA)</p>
                </div>

                <div className="info-card">
                  <h4>📊 Models Evaluated</h4>
                  <ul className="models-list">
                    <li>Random Forest Regressor ⭐ (Best)</li>
                    <li>XGBoost Regressor</li>
                    <li>Gradient Boosting Regressor</li>
                    <li>LightGBM</li>
                    <li>Decision Tree Regressor</li>
                  </ul>
                </div>
              </div>

              <div className="thesis-abstract">
                <h4>Abstract</h4>
                <p>
                  Dublin's residential property market has come under increasing strain from rising interest rates and limited housing supply. 
                  This research investigates how macroeconomic factors influence newly built residential property prices using comprehensive data 
                  from the Property Services Regulatory Authority (2019–2023), integrated with interest rate trends and new construction activity.
                </p>
                <p>
                  Comparison of five machine learning models revealed that the <strong>Random Forest Regressor delivered 88% prediction accuracy</strong>, 
                  outperforming all other approaches and effectively capturing the complex interactions among economic and spatial variables. These results 
                  provide valuable guidance for policymakers and real estate professionals in crafting data-driven strategies to promote market stability.
                </p>
              </div>
            </div>
          )}

          {/* Models Tab */}
          {activeTab === 'models' && (
            <div className="tab-content">
              <h4>Model Performance Comparison</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={modelPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="model" angle={-45} textAnchor="end" height={80} />
                    <YAxis label={{ value: 'R² Score', angle: -90, position: 'insideLeft' }} domain={[0.8, 1]} />
                    <Tooltip />
                    <Bar dataKey="r2" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="models-table">
                <table>
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>R² Score</th>
                      <th>MSE</th>
                      <th>MAE (€)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelPerformance.map((model, idx) => (
                      <tr key={idx} className={idx === 0 ? 'best-model' : ''}>
                        <td><strong>{model.model}</strong></td>
                        <td>{model.r2}</td>
                        <td>{(model.mse / 1e10).toFixed(1)} × 10¹⁰</td>
                        <td>{model.mae.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 style={{ marginTop: '30px' }}>Actual vs Predicted Values (Test Set)</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={actualVsPredicted}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" label={{ value: 'Sample ID', position: 'insideBottomRight', offset: -5 }} />
                    <YAxis label={{ value: 'Price (€)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#10b981" name="Actual Price" strokeWidth={2} />
                    <Line type="monotone" dataKey="predicted" stroke="#3b82f6" name="Predicted Price" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="key-findings">
                <h4>Key Findings</h4>
                <ul>
                  <li>Random Forest achieved the <strong>highest accuracy (88%)</strong> with MAE of €28,752</li>
                  <li>XGBoost performed second with <strong>87% accuracy</strong> and MAE of €29,402</li>
                  <li>Ensemble methods significantly outperformed standalone decision trees (83% accuracy)</li>
                  <li>The model effectively captures complex relationships between interest rates, construction trends, and location</li>
                </ul>
              </div>
            </div>
          )}

          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="tab-content">
              <div className="details-section">
                <h4>Research Objectives</h4>
                <ul>
                  <li>Investigate state-of-the-art predictive modelling for housing markets</li>
                  <li>Design a predictive framework incorporating macroeconomic factors, seasonal trends, and locational data</li>
                  <li>Analyze the role of seasonal trends and location in shaping property prices</li>
                  <li>Evaluate accuracy and reliability using metrics such as RMSE</li>
                </ul>
              </div>

              <div className="details-section">
                <h4>Methodology</h4>
                <ol>
                  <li><strong>Data Collection:</strong> Gathered data from PRSA (2019-2023) including property details, interest rates, and construction activity</li>
                  <li><strong>Feature Engineering:</strong> Created geographic features, temporal indicators, and macroeconomic variables</li>
                  <li><strong>Model Development:</strong> Trained 5 different ML models with hyperparameter optimization</li>
                  <li><strong>Evaluation:</strong> Used R², MSE, and MAE for comprehensive performance analysis</li>
                  <li><strong>Ensemble Creation:</strong> Combined best models using weighted voting for improved predictions</li>
                </ol>
              </div>

              <div className="details-section">
                <h4>Key Features Analyzed</h4>
                <div className="features-grid">
                  <div className="feature-item">
                    <strong>Location Data</strong>
                    <p>Latitude & Longitude coordinates</p>
                  </div>
                  <div className="feature-item">
                    <strong>Interest Rates</strong>
                    <p>ECB lending rates & trends</p>
                  </div>
                  <div className="feature-item">
                    <strong>Construction Activity</strong>
                    <p>New housing supply metrics</p>
                  </div>
                  <div className="feature-item">
                    <strong>Temporal Factors</strong>
                    <p>Seasonal trends & market cycles</p>
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4>Research Limitations</h4>
                <ul>
                  <li>Does not include neighborhood-specific attributes (amenities, infrastructure)</li>
                  <li>Does not account for external economic disruptors or sudden policy changes</li>
                  <li>Limited by available granular data at the time of study</li>
                </ul>
              </div>

              <div className="details-section">
                <h4>Future Work</h4>
                <ul>
                  <li>Extend dataset with property attributes (construction year, energy efficiency)</li>
                  <li>Include neighborhood characteristics (proximity to schools, healthcare, transport)</li>
                  <li>Incorporate external economic indicators (inflation, regional trends)</li>
                  <li>Develop interactive property price prediction portal</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="thesis-modal-footer">
          <button className="download-btn" onClick={downloadPDF}>
            📥 Download Full Report (PDF)
          </button>
          <p className="pdf-info">21 pages • 8,814 words • Completed Dec 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ThesisModal;
